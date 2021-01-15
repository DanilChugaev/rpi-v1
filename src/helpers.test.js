/* global describe test expect */
const helpers = require('./helpers');

describe('color', () => {
    test('Должен вернуть битовый формат красного цвета', () => {
        expect(helpers.color({ red: 255 })).toBe(65280);
    });

    test('Должен вернуть битовый формат зеленого цвета', () => {
        expect(helpers.color({ green: 255 })).toBe(16711680);
    });

    test('Должен вернуть битовый формат синего цвета', () => {
        expect(helpers.color({ blue: 255 })).toBe(255);
    });

    test('Должен вернуть битовый формат красного и зеленого цветов', () => {
        expect(helpers.color({ red: 255, green: 255 })).toBe(16776960);
    });

    test('Должен вернуть битовый формат красного и синего цветов', () => {
        expect(helpers.color({ red: 255, blue: 255 })).toBe(65535);
    });

    test('Должен вернуть битовый формат зеленого и синего цветов', () => {
        expect(helpers.color({ green: 255, blue: 255 })).toBe(16711935);
    });

    test('Должен вернуть битовый формат красного, зеленого и синего цветов', () => {
        expect(helpers.color({ red: 255, green: 255, blue: 255 })).toBe(16777215);
    });
});

describe('position', () => {
    const x0 = [
        { x: 0, y: 0, expected: 0 },
        { x: 0, y: 1, expected: 1 },
        { x: 0, y: 2, expected: 2 },
        { x: 0, y: 3, expected: 3 },
        { x: 0, y: 4, expected: 4 },
        { x: 0, y: 5, expected: 5 },
        { x: 0, y: 6, expected: 6 },
        { x: 0, y: 7, expected: 7 },
        { x: 0, y: 8, expected: 8 },
        { x: 0, y: 9, expected: 9 },
        { x: 0, y: 10, expected: 10 },
        { x: 0, y: 11, expected: 11 },
        { x: 0, y: 12, expected: 12 },
        { x: 0, y: 13, expected: 13 },
    ];
    const x1 = [
        { x: 1, y: 0, expected: 27 },
        { x: 1, y: 1, expected: 26 },
        { x: 1, y: 2, expected: 25 },
        { x: 1, y: 3, expected: 24 },
        { x: 1, y: 4, expected: 23 },
        { x: 1, y: 5, expected: 22 },
        { x: 1, y: 6, expected: 21 },
        { x: 1, y: 7, expected: 20 },
        { x: 1, y: 8, expected: 19 },
        { x: 1, y: 9, expected: 18 },
        { x: 1, y: 10, expected: 17 },
        { x: 1, y: 11, expected: 16 },
        { x: 1, y: 12, expected: 15 },
        { x: 1, y: 13, expected: 14 },
    ];
    const x2 = [
        { x: 2, y: 0, expected: 28 },
        { x: 2, y: 1, expected: 29 },
        { x: 2, y: 2, expected: 30 },
        { x: 2, y: 3, expected: 31 },
        { x: 2, y: 4, expected: 32 },
        { x: 2, y: 5, expected: 33 },
        { x: 2, y: 6, expected: 34 },
        { x: 2, y: 7, expected: 35 },
        { x: 2, y: 8, expected: 36 },
        { x: 2, y: 9, expected: 37 },
        { x: 2, y: 10, expected: 38 },
        { x: 2, y: 11, expected: 39 },
        { x: 2, y: 12, expected: 40 },
        { x: 2, y: 13, expected: 41 },
    ];
    const x3 = [
        { x: 3, y: 0, expected: 55 },
        { x: 3, y: 1, expected: 54 },
        { x: 3, y: 2, expected: 53 },
        { x: 3, y: 3, expected: 52 },
        { x: 3, y: 4, expected: 51},
        { x: 3, y: 5, expected: 50 },
        { x: 3, y: 6, expected: 49 },
        { x: 3, y: 7, expected: 48 },
        { x: 3, y: 8, expected: 47 },
        { x: 3, y: 9, expected: 46 },
        { x: 3, y: 10, expected: 45 },
        { x: 3, y: 11, expected: 44 },
        { x: 3, y: 12, expected: 43 },
        { x: 3, y: 13, expected: 42 },
    ];
    const x4 = [
        { x: 4, y: 0, expected: 56 },
        { x: 4, y: 1, expected: 57 },
        { x: 4, y: 2, expected: 58 },
        { x: 4, y: 3, expected: 59 },
        { x: 4, y: 4, expected: 60 },
        { x: 4, y: 5, expected: 61 },
        { x: 4, y: 6, expected: 62 },
        { x: 4, y: 7, expected: 63 },
        { x: 4, y: 8, expected: 64 },
        { x: 4, y: 9, expected: 65 },
        { x: 4, y: 10, expected: 66 },
        { x: 4, y: 11, expected: 67 },
        { x: 4, y: 12, expected: 68 },
        { x: 4, y: 13, expected: 69 },
    ];
    const x5 = [
        { x: 5, y: 0, expected: 83 },
        { x: 5, y: 1, expected: 82 },
        { x: 5, y: 2, expected: 81 },
        { x: 5, y: 3, expected: 80 },
        { x: 5, y: 4, expected: 79 },
        { x: 5, y: 5, expected: 78 },
        { x: 5, y: 6, expected: 77 },
        { x: 5, y: 7, expected: 76 },
        { x: 5, y: 8, expected: 75 },
        { x: 5, y: 9, expected: 74 },
        { x: 5, y: 10, expected: 73 },
        { x: 5, y: 11, expected: 72 },
        { x: 5, y: 12, expected: 71 },
        { x: 5, y: 13, expected: 70 },
    ];
    const x6 = [
        { x: 6, y: 0, expected: 84 },
        { x: 6, y: 1, expected: 85 },
        { x: 6, y: 2, expected: 86 },
        { x: 6, y: 3, expected: 87 },
        { x: 6, y: 4, expected: 88 },
        { x: 6, y: 5, expected: 89 },
        { x: 6, y: 6, expected: 90 },
        { x: 6, y: 7, expected: 91 },
        { x: 6, y: 8, expected: 92 },
        { x: 6, y: 9, expected: 93 },
        { x: 6, y: 10, expected: 94 },
        { x: 6, y: 11, expected: 95 },
        { x: 6, y: 12, expected: 96 },
        { x: 6, y: 13, expected: 97 },
    ];
    const x7 = [
        { x: 7, y: 0, expected: 111 },
        { x: 7, y: 1, expected: 110 },
        { x: 7, y: 2, expected: 109 },
        { x: 7, y: 3, expected: 108 },
        { x: 7, y: 4, expected: 107 },
        { x: 7, y: 5, expected: 106 },
        { x: 7, y: 6, expected: 105 },
        { x: 7, y: 7, expected: 104 },
        { x: 7, y: 8, expected: 103 },
        { x: 7, y: 9, expected: 102 },
        { x: 7, y: 10, expected: 101 },
        { x: 7, y: 11, expected: 100 },
        { x: 7, y: 12, expected: 99 },
        { x: 7, y: 13, expected: 98 },
    ];
    const x8 = [
        { x: 8, y: 0, expected: 112 },
        { x: 8, y: 1, expected: 113 },
        { x: 8, y: 2, expected: 114 },
        { x: 8, y: 3, expected: 115 },
        { x: 8, y: 4, expected: 116 },
        { x: 8, y: 5, expected: 117 },
        { x: 8, y: 6, expected: 118 },
        { x: 8, y: 7, expected: 119 },
        { x: 8, y: 8, expected: 120 },
        { x: 8, y: 9, expected: 121 },
        { x: 8, y: 10, expected: 122 },
        { x: 8, y: 11, expected: 123 },
        { x: 8, y: 12, expected: 124 },
        { x: 8, y: 13, expected: 125 },
    ];
    const x9 = [
        { x: 9, y: 0, expected: 139 },
        { x: 9, y: 1, expected: 138 },
        { x: 9, y: 2, expected: 137 },
        { x: 9, y: 3, expected: 136 },
        { x: 9, y: 4, expected: 135 },
        { x: 9, y: 5, expected: 134 },
        { x: 9, y: 6, expected: 133 },
        { x: 9, y: 7, expected: 132 },
        { x: 9, y: 8, expected: 131 },
        { x: 9, y: 9, expected: 130 },
        { x: 9, y: 10, expected: 129 },
        { x: 9, y: 11, expected: 128 },
        { x: 9, y: 12, expected: 127 },
        { x: 9, y: 13, expected: 126 },
    ];
    const x10 = [
        { x: 10, y: 0, expected: 140 },
        { x: 10, y: 1, expected: 141 },
        { x: 10, y: 2, expected: 142 },
        { x: 10, y: 3, expected: 143 },
        { x: 10, y: 4, expected: 144 },
        { x: 10, y: 5, expected: 145 },
        { x: 10, y: 6, expected: 146 },
        { x: 10, y: 7, expected: 147 },
        { x: 10, y: 8, expected: 148 },
        { x: 10, y: 9, expected: 149 },
        { x: 10, y: 10, expected: 150 },
        { x: 10, y: 11, expected: 151 },
        { x: 10, y: 12, expected: 152 },
        { x: 10, y: 13, expected: 153 },
    ];
    const x11 = [
        { x: 11, y: 0, expected: 167 },
        { x: 11, y: 1, expected: 166 },
        { x: 11, y: 2, expected: 165 },
        { x: 11, y: 3, expected: 164 },
        { x: 11, y: 4, expected: 163 },
        { x: 11, y: 5, expected: 162 },
        { x: 11, y: 6, expected: 161 },
        { x: 11, y: 7, expected: 160 },
        { x: 11, y: 8, expected: 159 },
        { x: 11, y: 9, expected: 158 },
        { x: 11, y: 10, expected: 157 },
        { x: 11, y: 11, expected: 156 },
        { x: 11, y: 12, expected: 155 },
        { x: 11, y: 13, expected: 154 },
    ];
    const x12 = [
        { x: 12, y: 0, expected: 168 },
        { x: 12, y: 1, expected: 169 },
        { x: 12, y: 2, expected: 170 },
        { x: 12, y: 3, expected: 171 },
        { x: 12, y: 4, expected: 172 },
        { x: 12, y: 5, expected: 173 },
        { x: 12, y: 6, expected: 174 },
        { x: 12, y: 7, expected: 175 },
        { x: 12, y: 8, expected: 176 },
        { x: 12, y: 9, expected: 177 },
        { x: 12, y: 10, expected: 178 },
        { x: 12, y: 11, expected: 179 },
        { x: 12, y: 12, expected: 180 },
        { x: 12, y: 13, expected: 181 },
    ];
    const x13 = [
        { x: 13, y: 0, expected: 195 },
        { x: 13, y: 1, expected: 194 },
        { x: 13, y: 2, expected: 193 },
        { x: 13, y: 3, expected: 192 },
        { x: 13, y: 4, expected: 191 },
        { x: 13, y: 5, expected: 190 },
        { x: 13, y: 6, expected: 189 },
        { x: 13, y: 7, expected: 188 },
        { x: 13, y: 8, expected: 187 },
        { x: 13, y: 9, expected: 186 },
        { x: 13, y: 10, expected: 185 },
        { x: 13, y: 11, expected: 184 },
        { x: 13, y: 12, expected: 183 },
        { x: 13, y: 13, expected: 182 },
    ];
    const x14 = [
        { x: 14, y: 0, expected: 196 },
        { x: 14, y: 1, expected: 197 },
        { x: 14, y: 2, expected: 198 },
        { x: 14, y: 3, expected: 199 },
        { x: 14, y: 4, expected: 200 },
        { x: 14, y: 5, expected: 201 },
        { x: 14, y: 6, expected: 202 },
        { x: 14, y: 7, expected: 203 },
        { x: 14, y: 8, expected: 204 },
        { x: 14, y: 9, expected: 205 },
        { x: 14, y: 10, expected: 206 },
        { x: 14, y: 11, expected: 207 },
        { x: 14, y: 12, expected: 208 },
        { x: 14, y: 13, expected: 209 },
    ];
    const x15 = [
        { x: 15, y: 0, expected: 223 },
        { x: 15, y: 1, expected: 222 },
        { x: 15, y: 2, expected: 221 },
        { x: 15, y: 3, expected: 220 },
        { x: 15, y: 4, expected: 219 },
        { x: 15, y: 5, expected: 218 },
        { x: 15, y: 6, expected: 217 },
        { x: 15, y: 7, expected: 216 },
        { x: 15, y: 8, expected: 215 },
        { x: 15, y: 9, expected: 214 },
        { x: 15, y: 10, expected: 213 },
        { x: 15, y: 11, expected: 212 },
        { x: 15, y: 12, expected: 211 },
        { x: 15, y: 13, expected: 210 },
    ];
    const x16 = [
        { x: 16, y: 0, expected: 224 },
        { x: 16, y: 1, expected: 225 },
        { x: 16, y: 2, expected: 226 },
        { x: 16, y: 3, expected: 227 },
        { x: 16, y: 4, expected: 228 },
        { x: 16, y: 5, expected: 229 },
        { x: 16, y: 6, expected: 230 },
        { x: 16, y: 7, expected: 231 },
        { x: 16, y: 8, expected: 232 },
        { x: 16, y: 9, expected: 233 },
        { x: 16, y: 10, expected: 234 },
        { x: 16, y: 11, expected: 235 },
        { x: 16, y: 12, expected: 236 },
        { x: 16, y: 13, expected: 237 },
    ];
    const x17 = [
        { x: 17, y: 0, expected: 251 },
        { x: 17, y: 1, expected: 250 },
        { x: 17, y: 2, expected: 249 },
        { x: 17, y: 3, expected: 248 },
        { x: 17, y: 4, expected: 247 },
        { x: 17, y: 5, expected: 246 },
        { x: 17, y: 6, expected: 245 },
        { x: 17, y: 7, expected: 244 },
        { x: 17, y: 8, expected: 243 },
        { x: 17, y: 9, expected: 242 },
        { x: 17, y: 10, expected: 241 },
        { x: 17, y: 11, expected: 240 },
        { x: 17, y: 12, expected: 239 },
        { x: 17, y: 13, expected: 238 },
    ];

    const testCases = [
        ...x0,
        ...x1,
        ...x2,
        ...x3,
        ...x4,
        ...x5,
        ...x6,
        ...x7,
        ...x8,
        ...x9,
        ...x10,
        ...x11,
        ...x12,
        ...x13,
        ...x14,
        ...x15,
        ...x16,
        ...x17,
    ];

    testCases.forEach(({ x, y, expected }) => {
        test(`Должен вернуть местоположение: ${expected}, светодиода по указанным x: ${x} и y: ${y}`, () => {
            expect(helpers.position({ x, y })).toBe(expected);
        });
    });
});
