function getColor({ red = 0, green = 0, blue = 0}) {
    return (green << 16) | (red << 8) | blue;
}

module.exports = class Digit {
    constructor({
        pixels,
        color = getColor({ blue: 255 }),
    }) {
        this.width = 3;
        this.height = 5;
        this.pixels = pixels;
        this.color = color;
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
     * @return {Array<number>}
     */
    zero({ x = 0, y = 0 } = {}) {
        this.pixels[this.index({ x: x, y: y })] = this.color;
        this.pixels[this.index({ x: x + 1, y: y })] = this.color;
        this.pixels[this.index({ x: x + 2, y: y })] = this.color;

        this.pixels[this.index({ x: x, y: y + 1 })] = this.color;
        this.pixels[this.index({ x: x + 2, y: y + 1 })] = this.color;

        this.pixels[this.index({ x: x, y: y + 2 })] = this.color;
        this.pixels[this.index({ x: x + 2, y: y + 2 })] = this.color;

        this.pixels[this.index({ x: x, y: y + 3 })] = this.color;
        this.pixels[this.index({ x: x + 2, y: y + 3 })] = this.color;

        this.pixels[this.index({ x: x, y: y + 4 })] = this.color;
        this.pixels[this.index({ x: x + 1, y: y + 4 })] = this.color;
        this.pixels[this.index({ x: x + 2, y: y + 4 })] = this.color;
    }

    /**
     * Определяет местоположение светодиода по указанным координатам
     *
     * @param {{ x: number, y: number }} - позиция по оси `x` и оси `y`
     * max x = 15
     * max y = 9
     *
     * @return {number} итоговая позиция светодиода
    */
    index({ x = 0, y = 0 } = {}) {
        const xPos = !(x % 2) ? x * 14: (x - ((x-1)/2)) * 14 * 2 - 1;
        const yPos = !(x % 2) ? y : 0 - y;
        return xPos + yPos;
    }
}

