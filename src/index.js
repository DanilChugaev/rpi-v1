const neopixel = require('rpi-ws281x');
const Digit = require('./Digit');

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
        
        digit.zero({ x: 15, y: 0});

        neopixel.render(this.pixels);
    }
    
    getColor({ red = 0, green = 0, blue = 0}) {
        return (green << 16) | (red << 8) | blue;
    }
}

const panel = new Panel();
panel.run();