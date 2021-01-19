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
        this.nskClock = new Clock({
            x: 1, y: 1,
            color: helpers.color({ green: 255 }),
        });
        this.mskClock = new Clock({
            x: 1, y: 8,
        });

        neopixel.configure(this.config);
    }

    loop() {
        const pixels = new Uint32Array(this.config.leds);

        this.nskClock.run({ pixels });
        this.mskClock.run({ pixels });

        neopixel.render(pixels);
    }

    run() {
        setInterval(this.loop.bind(this), 1000);
    }

    reset() {
        neopixel.reset();
    }
}

const panel = new Panel();
panel.run();