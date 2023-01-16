import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

const filename = path.join('docs', 'lab0.pdf');
let content = '';

describe('docs/lab0.pdf', () => {
    it("devrait trouver un fichier docs/lab0.pdf", async () => {
        content = readFileSync(filename, 'utf-8');
        expect(content).toBeTruthy();
    });

    it("devrait trouver que le fichier docs/lab0.pdf est valide", () => {
        expect(content.lastIndexOf("%PDF-")).toEqual(0);
        expect(content.lastIndexOf("%%EOF")).toBeGreaterThan(-1);
    });
});