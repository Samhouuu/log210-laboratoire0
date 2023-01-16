import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('src', 'routes', 'jeuRouter.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('src/routes/jeuRouter.ts', () => {
  it("should contain this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))", () => {
    expect(content.includes("this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))")).toBeTruthy();
  });

  it("should contain redemarrerJeu(req: Request, res: Response, next: NextFunction) {", () => {
    expect(content.includes("redemarrerJeu(req: Request, res: Response, next: NextFunction) {")).toBeTruthy();
  });

  it("should contain this._controleurJeu.redemarrerJeu()", () => {
    expect(content.includes("this._controleurJeu.redemarrerJeu()")).toBeTruthy();
  });

  it("should contain resultat.v3", () => {
    expect(content.includes("resultatObj.v3")).toBeTruthy();
  });
});


