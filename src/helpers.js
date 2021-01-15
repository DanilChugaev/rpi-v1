/**
 * Возвращает цвет в битовом формате
 *
 * @param {{ red: number, green: number, blue: number }} - человекочитаемые значения красного, зеленого и синего цветов
 *
 * @return {number} итоговый цвет
 */
const color = function({ red = 0, green = 0, blue = 0}) {
    return (green << 16) | (red << 8) | blue;
};

/**
 * Определяет местоположение светодиода по указанным координатам
 * Нечетные полосы (начиная от 0 светодиода) идут вниз
 * Четные идут вверх
 *
 * @param {{ x: number, y: number }} - позиция по оси `x` и оси `y`
 *
 * @return {number} итоговая позиция светодиода
 */
const position = function({ x = 0, y = 0 } = {}) {
    return !(x % 2) ? x * 14 + y : (x - ((x-1)/2)) * 14 * 2 - 1 - y;
};

module.exports.color = color;
module.exports.position = position;
