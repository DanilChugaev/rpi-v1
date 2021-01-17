const neopixel = require('rpi-ws281x');
const Clock = require('./Clock');
const helpers = require('./helpers');

/** Класс, отвечающий за инициализацию панели светодиодов */
class Panel {
    constructor() {
        this.config = {
            leds: 252,
            brightness: 24,
        };
        this.pixels = new Uint32Array(this.config.leds);

        neopixel.configure(this.config);
    }

    run() {
        const nskClock = new Clock({
            x: 1, y: 1,
            pixels: this.pixels,
        });
        const mskClock = new Clock({
            x: 1, y: 8,
            pixels: this.pixels,
            color: helpers.color({ green: 255 }),
        });

        nskClock.run();
        mskClock.run();

        neopixel.render(this.pixels);
    }

    reset() {
        neopixel.reset();
    }
}

const panel = new Panel();
panel.run();
