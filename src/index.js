const neopixel = require('rpi-ws281x');
const Digit = require('./Digit');

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
        const digit = new Digit({
            pixels: this.pixels,
        });

        digit.nine({ x: 0, y: 0});

        neopixel.render(this.pixels);
    }

    reset() {
        neopixel.reset();
    }
}

const panel = new Panel();
panel.run();
