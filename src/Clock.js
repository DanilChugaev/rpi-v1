const Digit = require('./Digit');
const helpers = require('./helpers');

/** Класс, отвечающий за создание clock */
module.exports = class Clock {
    /**
     * Конструктор clock
     *
     * @param {Uint32Array<number>} pixels - массив пикселей
     * @param {number} color - цвет пикселя
     */
    constructor({
        pixels,
        color = helpers.color({ blue: 255 }),
        x = 0, y = 0,
    }) {
        this.x = x;
        this.y = y;
        this.pixels = pixels;
        this.color = color;
        this.digit = null;
    }

    run() {
        this.digit = new Digit({
            pixels: this.pixels,
            color: this.color,
        });
            
        // for(;;) {
        this.update();
        // }
    }

    update() {
        const { h1, h2, m1, m2 } = this.getTime();

        this.digit.create({ n: h1, x: this.x, y: this.y });
        this.digit.create({ n: h2, x: this.x + 4, y: this.y });
        this.digit.create({ n: m1, x: this.x + 9, y: this.y });
        this.digit.create({ n: m2, x: this.x + 13, y: this.y });
    }

    getTime() {
        const current = new Date();
        const hours = String(current.getHours());
        const minutes = String(current.getMinutes());

        return {
            h1: hours.length === 2 ? Number(hours[0]) : 0,
            h2: hours.length === 2 ? Number(hours[1]) : Number(hours[0]),
            m1: minutes.length === 2 ? Number(minutes[0]) : 0,
            m2: minutes.length === 2 ? Number(minutes[1]) : Number(minutes[0]),
        };
    }
};