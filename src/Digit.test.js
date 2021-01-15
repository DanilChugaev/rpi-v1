/* global describe test expect beforeEach */
const Digit = require('./Digit');

const leds = 252;

describe('Digit', () => {
    let digit;

    beforeEach(() => {
        const pixels = new Uint32Array(leds);
        digit = new Digit({ pixels });
    });

    test('Должен вернуть массив с цифрой `0`', () => {
        digit.zero({ x: 0, y: 0});
        expect(digit.getPixels()).toStrictEqual(new Uint32Array([255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    });

    // test('Должен вернуть массив с цифрой `1`', () => {
    //     digit.one({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `2`', () => {
    //     digit.two({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `3`', () => {
    //     digit.three({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `4`', () => {
    //     digit.four({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `5`', () => {
    //     digit.five({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `6`', () => {
    //     digit.six({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `7`', () => {
    //     digit.seven({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `8`', () => {
    //     digit.one({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });

    // test('Должен вернуть массив с цифрой `9`', () => {
    //     digit.nine({ x: 0, y: 0});
    //     expect(digit.getPixels()).toStrictEqual(new Uint32Array([]));
    // });
});
