const helpers = require('./helpers');
const { position } = helpers;

/** Класс, отвечающий за создание цифр */
module.exports = class Digit {
    /**
     * Конструктор цифр
     *
     * @param {Uint32Array<number>} pixels - массив пикселей
     * @param {number} color - цвет пикселя
     */
    constructor({
        pixels,
        color = helpers.color({ blue: 255 }),
    }) {
        this.width = 3;
        this.height = 5;
        this.pixels = pixels;
        this.color = color;
    }

    /**
     * Возвращает итоговый массив пикселей
     *
     * @return {Uint32Array<number>}
     */
    getPixels() {
        return this.pixels;
    }

    /**
     * Create zero number
     *
     * @example
     * # # #
     * #   #
     * #   #
     * #   #
     * # # #
     *
     * @return {Uint32Array<number>}
     */
    zero({ x = 0, y = 0 } = {}) {
        this.pixels[position({ x: x, y: y })] = this.color;
        this.pixels[position({ x: x + 1, y: y })] = this.color;
        this.pixels[position({ x: x + 2, y: y })] = this.color;

        this.pixels[position({ x: x, y: y + 1 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.pixels[position({ x: x, y: y + 2 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 2 })] = this.color;

        this.pixels[position({ x: x, y: y + 3 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.pixels[position({ x: x, y: y + 4 })] = this.color;
        this.pixels[position({ x: x + 1, y: y + 4 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 4 })] = this.color;
    }
};

