import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('src', 'core', 'jeuDeDes.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('src/core/jeuDeDes.ts', () => {
  it("should contain redemarrerJeu() {", () => {
    expect(content.includes("redemarrerJeu() {")).toBeTruthy();
  });

  it("should contain this._joueurs.clear()", () => {
    expect(content.includes("this._joueurs.clear()")).toBeTruthy();
  });

  it("should contain this._d3 = new De()", () => {
    expect(content.includes("this._d3 = new De()")).toBeTruthy();
  });
  it("should contain this._d3.brasser()", () => {
    expect(content.includes("this._d3.brasser()")).toBeTruthy();
  });
  it("should contain const v3 = this._d3.valeur", () => {
    expect(content.includes("const v3 = this._d3.valeur")).toBeTruthy();
  });
  it("should contain const somme = v1 + v2 + v3", () => {
    expect(content.includes("const somme = v1 + v2 + v3")).toBeTruthy();
  });
  it("should contain <= 10", () => {
    expect(content.includes("<= 10")).toBeTruthy();
  });
  it("should contain v3: this._d3.valeur", () => {
    expect(content.includes("v3: this._d3.valeur")).toBeTruthy();
  });
});


