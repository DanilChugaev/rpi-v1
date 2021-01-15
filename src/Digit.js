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
     * Create horizontal top line
     *
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

