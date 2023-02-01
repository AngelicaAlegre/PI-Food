/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");
const { v4: uuidv4 } = require("uuid");
const request = require("supertest");

const agent = session(app);
/**
 * Mock
 * Es un objeto falso
 */
const recipe = {
  id: uuidv4(),
  name: "Milanea a la napolitana",
  dishSummary: "Resumen...",
  steps: ["fritar", "cocinar"],
  healthScore: 100,
};
describe("Recipe routes", () => {
  before(() =>
  // Conectarse a la base de datos
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    // Crear un registro en la base de datos con el objeto falso (mock)
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  /**
   * Vamos a probar los GET a la ruta /recipes
   */
  describe("GET /recipes", () => {
    /**
     * Primer test, comprueba que cuando vayamos a la ruta /recipe
     * Devuelva un status 200
     */
    it("should get 200", () => agent.get("/recipe").expect(200));
    /**
     * Hace una solicitud en la ruta /recipe y comprueba que se pidan los datos
     * de la BDD y de la API
     */
    it("Verify the data", async () => {
      const { body, status } = await request(app).get("/recipe");
      expect(status).to.equal(200);
      /**
       * 10 API
       * 1 de la BDD
       */
      expect(body.length).to.greaterThanOrEqual(11);
    });
    it("Verify the data", async () => {
      const { body, status } = await request(app).get("/recipe");
      expect(status).to.equal(200);
      const detail = await request(app).get("/recipe/" + body[0].id);
      expect(detail.body.name).to.equal("Milanea a la napolitana");
    });
  });
});
