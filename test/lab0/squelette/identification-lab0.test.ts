import 'jest-extended';
import path from 'path';
import { readFileSync } from 'fs';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'Squelette.md');
  content = readFileSync(filename, 'utf-8');
});

describe('README identification', () => {
  it('devrait trouver votre nom', () => {
    expect(content.includes("Entrer votre nom")).toBeFalsy();
  });

  it('devrait trouver votre courriel', () => {
    expect(content.includes("Entrer votre courriel")).toBeFalsy();
  });

  it('devrait trouver Votre code moodle', () => {
    expect(content.includes("Entrer votre code moodle obtenu à partir de Signets")).toBeFalsy();
  });

  it("devrait trouver votre compte github", () => {
    expect(content.includes("Entrer l'identifiant de votre compte github")).toBeFalsy();
  });
});
