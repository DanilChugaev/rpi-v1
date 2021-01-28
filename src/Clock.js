const Digit = require('./Digit');
const helpers = require('./helpers');

/**
 * @typedef NeopixelTime
 * @property {number} h1 - первая цифра часа
 * @property {number} h2 - вторая цифра часа
 * @property {number} m1 - первая цифра минуты
 * @property {number} m2 - вторая цифра минуты
 */

/** Класс, отвечающий за создание часов */
module.exports = class Clock {
    /**
     * Конструктор clock
     *
     * @param {number} color - цвет пикселя
     * @param {number} x - положение пикселя по оси x
     * @param {number} y - положение пикселя по оси y
     * @param {number} timezone - смещение времени, относительно локального
     *  @example
     *      -4 - относительно новосибирского времени получится московское
     */
    constructor({
        color = helpers.color({ blue: 255 }),
        x = 0, y = 0,
        timezone = 0,
    }) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.digit = null;
        this.timezone = timezone;
    }

    /**
     * Запуск часов
     *
     * @param {Uint32Array<number>} pixels - массив пикселей
     */
    run({ pixels }) {
        this.digit = new Digit({
            pixels,
            color: this.color,
        });

        this.update();
    }

    /** Обновляет состояние часов */
    update() {
        const { h1, h2, m1, m2 } = this.getTime(this.timezone);

        this.digit.create({ n: h1, x: this.x, y: this.y });
        this.digit.create({ n: h2, x: this.x + 4, y: this.y });
        this.digit.create({ n: m1, x: this.x + 9, y: this.y });
        this.digit.create({ n: m2, x: this.x + 13, y: this.y });
    }

    /**
     * Возвращает цифры времени для отображения на панели светодиодов
     *
     * @param {number} timezone - смещение времени, относительно локального
     *
     * @return {NeopixelTime}
     */
    getTime(timezone = 0) {
        const current = this.getCurrentTime();
        let hours = current.getHours();
        let minutes = current.getMinutes();

        if (timezone !== 0) {
            hours = this.calculateHoursWithTimezone({ hours, timezone });
        }

        hours = String(hours);
        minutes = String(minutes);

        return {
            h1: hours.length === 2 ? Number(hours[0]) : 0,
            h2: hours.length === 2 ? Number(hours[1]) : Number(hours[0]),
            m1: minutes.length === 2 ? Number(minutes[0]) : 0,
            m2: minutes.length === 2 ? Number(minutes[1]) : Number(minutes[0]),
        };
    }

    /**
     * Считает время относительно локального в зависимости от таймзоны
     *
     * @param {number} hours - локальный час
     * @param {number} timezone - смещение времени, относительно локального
     *
     * @return {number}
     */
    calculateHoursWithTimezone({ hours, timezone }) {
        let result = hours + timezone;

        if (result < 0) {
            result = 24 + result;
        }

        return result;
    }

    /**
     * Просто возвращает текущую дату и время строкой
     *
     * @example
     *  'Wed Jan 20 2021 14:29:36 GMT+0700 (+07)'
     *
     * @return {Date}
     */
    getCurrentTime() {
        return new Date();
    }
};
