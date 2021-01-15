const helpers = require('./helpers');

describe('getColor', () => {
    test('Должен вернуть битовый формат красного цвета', () => {
        expect(helpers.getColor({ red: 255 })).toBe(65280);
    });

    test('Должен вернуть битовый формат зеленого цвета', () => {
        expect(helpers.getColor({ green: 255 })).toBe(16711680);
    });

    test('Должен вернуть битовый формат синего цвета', () => {
        expect(helpers.getColor({ blue: 255 })).toBe(255);
    });

    test('Должен вернуть битовый формат красного и зеленого цветов', () => {
        expect(helpers.getColor({ red: 255, green: 255 })).toBe(16776960);
    });

    test('Должен вернуть битовый формат красного и синего цветов', () => {
        expect(helpers.getColor({ red: 255, blue: 255 })).toBe(65535);
    });

    test('Должен вернуть битовый формат зеленого и синего цветов', () => {
        expect(helpers.getColor({ green: 255, blue: 255 })).toBe(16711935);
    });

    test('Должен вернуть битовый формат красного, зеленого и синего цветов', () => {
        expect(helpers.getColor({ red: 255, green: 255, blue: 255 })).toBe(16777215);
    });
});
