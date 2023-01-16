
import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'rdcu-redemarrerJeu.puml')
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/rdcu-redemarrerJeu.puml', () => {
  it("should contain :JeuDeDes", () => {
    expect(content.includes(":JeuDeDes")).toBeTruthy();
  });

  it("should contain joueurs:", () => {
    expect(content.includes("joueurs:")).toBeTruthy();
  });

  it("should contain Map<String, Joueur>", () => {
    expect(content.includes("Map<String, Joueur>")).toBeTruthy();
  });

  it("should contain redemarrerJeu()", () => {
    expect(content.includes("redemarrerJeu()")).toBeTruthy();
  });
});


