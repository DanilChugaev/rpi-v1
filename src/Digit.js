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
     * Create digit from number
     *
     * @param {number} n - цифра
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     *
     * @return {void}
     */
    create({ n, x, y }) {
        switch(n) {
        case 0:
            this.zero({ x, y });
            break;
        case 1:
            this.one({ x, y });
            break;
        case 2:
            this.two({ x, y });
            break;
        case 3:
            this.three({ x, y });
            break;
        case 4:
            this.four({ x, y });
            break;
        case 5:
            this.five({ x, y });
            break;
        case 6:
            this.six({ x, y });
            break;
        case 7:
            this.seven({ x, y });
            break;
        case 8:
            this.eight({ x, y });
            break;
        case 9:
            this.nine({ x, y });
            break;
        default:
            this.zero({ x, y });
            break;
        }
    }

    /**
     * Create horizontal top line
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * * * *
     * * * *
     * * * *
     * * * *
     *
     * @return {void}
     */
    createHorizontalTopLine({ x = 0, y = 0 } = {}) {
        this.pixels[position({ x: x, y })] = this.color;
        this.pixels[position({ x: x + 1, y })] = this.color;
        this.pixels[position({ x: x + 2, y })] = this.color;
    }

    /**
     * Create horizontal middle line
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * * * *
     * * * *
     * # # #
     * * * *
     * * * *
     *
     * @return {void}
     */
    createHorizontalMiddleLine({ x = 0, y = 0 } = {}) {
        this.pixels[position({ x: x, y: y + 2 })] = this.color;
        this.pixels[position({ x: x + 1, y: y + 2 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 2 })] = this.color;
    }

    /**
     * Create horizontal bottom line
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * * * *
     * * * *
     * * * *
     * * * *
     * # # #
     *
     * @return {void}
     */
    createHorizontalBottomLine({ x = 0, y = 0 } = {}) {
        this.pixels[position({ x: x, y: y + 4 })] = this.color;
        this.pixels[position({ x: x + 1, y: y + 4 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 4 })] = this.color;
    }

    /**
     * Create number `0`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * # * #
     * # * #
     * # * #
     * # # #
     *
     * @return {void}
     */
    zero({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x: x, y: y + 1 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.pixels[position({ x: x, y: y + 2 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 2 })] = this.color;

        this.pixels[position({ x: x, y: y + 3 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

    /**
     * Create number `1`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * * * #
     * * * #
     * * * #
     * * * #
     * * * #
     *
     * @return {void}
     */
    one({ x = 0, y = 0 } = {}) {
        for(let i = 0; i < 5; i++) {
            this.pixels[position({ x: x + 2, y: y + i })] = this.color;
        }
    }

    /**
     * Create number `2`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * * * #
     * # # #
     * # * *
     * # # #
     *
     * @return {void}
     */
    two({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

    /**
     * Create number `3`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * * * #
     * # # #
     * * * #
     * # # #
     *
     * @return {void}
     */
    three({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

    /**
     * Create number `4`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # * #
     * # * #
     * # # #
     * * * #
     * * * #
     *
     * @return {void}
     */
    four({ x = 0, y = 0 } = {}) {
        this.pixels[position({ x, y })] = this.color;
        this.pixels[position({ x, y: y + 1 })] = this.color;

        this.pixels[position({ x: x + 2, y })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 4 })] = this.color;
    }

    /**
     * Create number `5`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * # * *
     * # # #
     * * * #
     * # # #
     *
     * @return {void}
     */
    five({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

    /**
     * Create number `6`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * # * *
     * # # #
     * # * #
     * # # #
     *
     * @return {void}
     */
    six({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x, y: y + 3 })] = this.color;

        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

    /**
     * Create number `7`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * * * #
     * * * #
     * * * #
     * * * #
     *
     * @return {void}
     */
    seven({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 2 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 4 })] = this.color;
    }

    /**
     * Create number `8`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * # * #
     * # # #
     * # * #
     * # # #
     *
     * @return {void}
     */
    eight({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x: x, y: y + 1 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x: x, y: y + 3 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

    /**
     * Create number `9`
     *
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @example
     * # # #
     * # * #
     * # # #
     * * * #
     * # # #
     *
     * @return {void}
     */
    nine({ x = 0, y = 0 } = {}) {
        this.createHorizontalTopLine({ x, y });

        this.pixels[position({ x: x, y: y + 1 })] = this.color;
        this.pixels[position({ x: x + 2, y: y + 1 })] = this.color;

        this.createHorizontalMiddleLine({ x, y });

        this.pixels[position({ x: x + 2, y: y + 3 })] = this.color;

        this.createHorizontalBottomLine({ x, y });
    }

};

