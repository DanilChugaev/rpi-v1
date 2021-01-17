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
        });

        this.digit.create({
            n: 8,
            x: this.x,
            y: this.y,
        });
    }

    update() {

    }
};