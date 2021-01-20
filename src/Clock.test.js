/* global describe test expect beforeEach */
const Clock = require('./Clock');

describe('Clock', () => {
    let clock;

    beforeEach(() => {
        clock = new Clock({ color: 255 });
    });

    describe('getTime без таймзоны', () => {
        test('Должен вернуть время, если есть все цифры (h1, h2, m1, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 12;
                    },
                    getMinutes() {
                        return 34;
                    }
                };
            };
            const expected = {
                h1: 1,
                h2: 2,
                m1: 3,
                m2: 4,
            };

            expect(clock.getTime()).toEqual(expected);
        });

        test('Должен вернуть время, если есть цифры (h2, m1, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 2;
                    },
                    getMinutes() {
                        return 34;
                    }
                };
            };
            const expected = {
                h1: 0,
                h2: 2,
                m1: 3,
                m2: 4,
            };

            expect(clock.getTime()).toEqual(expected);
        });

        test('Должен вернуть время, если есть цифры (h1, h2, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 12;
                    },
                    getMinutes() {
                        return 4;
                    }
                };
            };
            const expected = {
                h1: 1,
                h2: 2,
                m1: 0,
                m2: 4,
            };

            expect(clock.getTime()).toEqual(expected);
        });

        test('Должен вернуть время, если есть цифры (h2, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 2;
                    },
                    getMinutes() {
                        return 4;
                    }
                };
            };
            const expected = {
                h1: 0,
                h2: 2,
                m1: 0,
                m2: 4,
            };

            expect(clock.getTime()).toEqual(expected);
        });
    });

    describe('getTime с таймзоной', () => {
        test('Должен вернуть время, если есть все цифры (h1, h2, m1, m2) и таймзона -4', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 3;
                    },
                    getMinutes() {
                        return 34;
                    }
                };
            };
            const timezone = -4;
            const expected = {
                h1: 2,
                h2: 3,
                m1: 3,
                m2: 4,
            };

            expect(clock.getTime(timezone)).toEqual(expected);
        });

        test('Должен вернуть время, если есть цифры (h2, m1, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 2;
                    },
                    getMinutes() {
                        return 34;
                    }
                };
            };
            const timezone = -4;
            const expected = {
                h1: 2,
                h2: 2,
                m1: 3,
                m2: 4,
            };

            expect(clock.getTime(timezone)).toEqual(expected);
        });

        test('Должен вернуть время, если есть цифры (h1, h2, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 12;
                    },
                    getMinutes() {
                        return 4;
                    }
                };
            };
            const timezone = -4;
            const expected = {
                h1: 0,
                h2: 8,
                m1: 0,
                m2: 4,
            };

            expect(clock.getTime(timezone)).toEqual(expected);
        });

        test('Должен вернуть время, если есть цифры (h2, m2)', async () => {
            clock.getCurrentTime = () => {
                return {
                    getHours() {
                        return 0;
                    },
                    getMinutes() {
                        return 4;
                    }
                };
            };
            const timezone = -4;
            const expected = {
                h1: 2,
                h2: 0,
                m1: 0,
                m2: 4,
            };

            expect(clock.getTime(timezone)).toEqual(expected);
        });
    });

    describe('calculateHoursWithTimezone', () => {
        const testCases = [
            { hours: 0, timezone: -4, expected: 20 },
            { hours: 1, timezone: -4, expected: 21 },
            { hours: 2, timezone: -4, expected: 22 },
            { hours: 3, timezone: -4, expected: 23 },
            { hours: 4, timezone: -4, expected: 0 },
            { hours: 5, timezone: -4, expected: 1 },
            { hours: 6, timezone: -4, expected: 2 },
            { hours: 7, timezone: -4, expected: 3 },
            { hours: 8, timezone: -4, expected: 4 },
            { hours: 9, timezone: -4, expected: 5 },
            { hours: 10, timezone: -4, expected: 6 },
            { hours: 11, timezone: -4, expected: 7 },
            { hours: 12, timezone: -4, expected: 8 },
            { hours: 13, timezone: -4, expected: 9 },
            { hours: 14, timezone: -4, expected: 10 },
            { hours: 15, timezone: -4, expected: 11 },
            { hours: 16, timezone: -4, expected: 12 },
            { hours: 17, timezone: -4, expected: 13 },
            { hours: 18, timezone: -4, expected: 14 },
            { hours: 19, timezone: -4, expected: 15 },
            { hours: 20, timezone: -4, expected: 16 },
            { hours: 21, timezone: -4, expected: 17 },
            { hours: 22, timezone: -4, expected: 18 },
            { hours: 23, timezone: -4, expected: 19 },
        ];

        testCases.forEach(({ hours, timezone, expected }) => {
            test(`Должен вернуть корректный час, если hours: ${hours} и timezone: ${timezone}`, async () => {
                expect(clock.calculateHoursWithTimezone({ hours, timezone })).toBe(expected);
            });
        });
    });
});
