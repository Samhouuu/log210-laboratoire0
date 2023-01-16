import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('public', 'lib', 'main.js')
  content = readFileSync(filename, 'utf-8');
});

describe('public/lib/main.js', () => {
  it("devrait utiliser fetch pour le bouton redémarrer", () => {
    expect(content.includes(`document.getElementById("redemarrer").addEventListener("click", function () {`)).toBeTruthy();
    expect(content.includes(`fetch("/api/v1/jeu/redemarrerJeu")`)).toBeTruthy();
  });

});

