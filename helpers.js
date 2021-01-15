/**
 * Возвращает цвет в битовом формате
 *
 * @param {{ red: number, green: number, blue: number }} - человекочитаемые значения красного, зеленого и синего цветов
 *
 * @return {number} итоговый цвет
 */
const getColor = function({ red = 0, green = 0, blue = 0}) {
    return (green << 16) | (red << 8) | blue;
};

/**
 * Определяет местоположение светодиода по указанным координатам
 *
 * @param {{ x: number, y: number }} - позиция по оси `x` и оси `y`
 * max x = 15
 * max y = 9
 *
 * @return {number} итоговая позиция светодиода
 */
const index = function({ x = 0, y = 0 } = {}) {
    const xPos = !(x % 2) ? x * 14: (x - ((x-1)/2)) * 14 * 2 - 1;
    const yPos = !(x % 2) ? y : 0 - y;
    return xPos + yPos;
};

module.exports.getColor = getColor;
module.exports.index = index;
