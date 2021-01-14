const neopixel = require('rpi-ws281x');

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
        for (let i = 0; i < this.config.leds; i++) {
            this.pixels[i] = this.getColor({ blue: 255 });
        }

        neopixel.render(this.pixels);
    }
    
    getColor({ red = 0, green = 0, blue = 0}) {
        return (green << 16) | (red << 8) | blue;
    }
};

const example = new Panel();
example.run();