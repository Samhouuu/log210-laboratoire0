import { assert } from 'console';
import 'jest-extended';
import { Joueur } from '../../../src/core/joueur';
import supertest from 'supertest'
import app from '../../../src/app';
import { jeuRoutes } from "../../../src/routes/jeuRouter";

// Creation de 2 instances de joueur
let joueur1 = new Joueur('yvan');
let joueur2 = new Joueur('Maxime');

// Creation de la requete
const request = supertest(app);


beforeAll(async () => {
  joueur1 = new Joueur('yvan');
  joueur2 = new Joueur('Maxime');
});

// Test de la methode redemarrerJeu
describe('GET /api/v1/jeu/redemarrerJeu/:id', () => {
  it('verifie que les instances de joueurs ont ete creer', () => {
    expect(joueur1).toBeDefined();
    expect(joueur2).toBeDefined();
  });

  it("verifie que le statut de redemarrerJeu est 200 et que la reponse est du JSON", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  it('verifie que toutes les instances de joueurs ont été supprimées', () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

  it("verifie que le statut de jouer est 404 et que la reponse est du JSON", async () => {
    const response = await request.get('/api/v1/jeu/jouer/' + joueur1.nom);
    expect(response.status).toBe(404);
  });  
});
