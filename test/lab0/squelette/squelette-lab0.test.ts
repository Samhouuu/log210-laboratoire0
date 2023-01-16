import 'jest-extended';
import path from 'path';
import { readFileSync } from 'fs';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'Squelette.md');
  content = readFileSync(filename, 'utf-8');
});

describe('ReadmeSquelette', () => {
  it("should contain D'où vient l'idée de base pour ce squelette?", () => {
    expect(content.includes("D'où vient l'idée de base pour ce squelette?")).toBeTruthy();
  });

  it("should contain Le Joueur demande à redémarrer l'application", () => {
    expect(content.includes("Le Joueur demande à redémarrer l'application")).toBeTruthy();
  });

  it("should contain Le Système termine tous les jeux en cours et redémarre l'application", () => {
    expect(content.includes("Le Système termine tous les jeux en cours et redémarre l'application")).toBeTruthy();
  });

  it("should contain - d3.valeur est devenue un nombre entier aléatoire entre 1 et 6", () => {
    expect(content.includes("- d3.valeur est devenue un nombre entier aléatoire entre 1 et 6")).toBeTruthy();
  });

  it("should contain - j.nbLancersGagnés a été incrémenté si la totale de d1.valeur, d2.valeur, d3.valeur est plus petite ou égale à 10", () => {
    expect(content.includes("- j.nbLancersGagnés a été incrémenté si la totale de d1.valeur, d2.valeur, d3.valeur est plus petite ou égale à 10")).toBeTruthy();
  });

});


