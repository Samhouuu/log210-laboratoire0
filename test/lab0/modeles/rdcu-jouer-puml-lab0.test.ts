import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'modeles', 'rdcu-jouer.puml');
  content = readFileSync(filename, 'utf-8');
  console.log(filename);
});

describe('docs/modeles/rdcu-jouer.puml', () => {
  it('should contain participant "d3:De" as d3 ', () => {
    expect(content.includes('participant "d3:De" as d3')).toBeTruthy();
  });
  it('should contain  participant "d3:De" as d3', () => {
    expect(content.includes('participant "d3:De" as d3')).toBeTruthy();
  });
  it('should contain  c->d3 : brasser() plus GRASP', () => {
    expect(content.includes('c->d3 : brasser()')).toBeTruthy();
  });
  // it('should contain note right : selon Expert;', () => {
  //   expect(content.includes('note right : selon Expert')).toBeTruthy();
  // });
  it('should contain c->d3 : v3 = valeur', () => {
    expect(content.includes('c->d3 : v3 = valeur')).toBeTruthy();
  });
  // it('should contain note right : selon Expert', () => {
  //   expect(content.includes('note right : selon Expert')).toBeTruthy();
  // });
  it('should contain opt v1 + v2 + v3 <= 10', () => {
    expect(content.includes('opt v1 + v2 + v3 <= 10')).toBeTruthy();
  });
});


