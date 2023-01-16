import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'mdd.puml');
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/mdd.puml', () => {
  it('devrait contenir les 3 dés', () => {
    expect(content.includes('JeuDeDés "1" -up- "3" Dé : inclut >')).toBeTruthy();
  });
});


