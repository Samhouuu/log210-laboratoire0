import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'dss-redemarrerJeu.puml');
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/dss-redemarrerJeu.puml', () => {
  it("should contain Joueur", () => {
    expect(content.includes("Joueur")).toBeTruthy();
  });

  it("should contain Système", () => {
    expect(content.includes("Système")).toBeTruthy();
  });

  it("should contain redemarrerJeu()", () => {
    expect(content.includes("redémarrerJeu()")).toBeTruthy();
  });

});


