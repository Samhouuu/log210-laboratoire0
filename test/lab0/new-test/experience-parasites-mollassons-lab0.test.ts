import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
    const filename = path.join('docs', 'experience-parasites-mollassons.md');
    content = readFileSync(filename, 'utf-8');
});

describe('docs/experience-parasites-mollassons.md', () => {
    it("devrait contenir au moins 300 mots (sans les 115 dans les directives)", () => {
        expect(wordCount(content)).toBeGreaterThanOrEqual(300 + 115);
    });
});

// https://stackoverflow.com/a/40385425/1168342
function wordCount(str: string): any {
    return str.split(' ')
        .filter(function (n) { return n != '' })
        .length;
}

