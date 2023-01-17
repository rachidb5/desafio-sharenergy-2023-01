const frisby = require("frisby");
require("dotenv").config();

const url = "http://localhost:3000";

describe("Cria um endpoint para o cadastro de usuários", () => {

  it('Será validado que o campo "usuario" é obrigatório', async () => {
    await frisby
      .post(`${url}/login/`, {
        password: "sh@r3n3rgy",
      })
      .expect("status", 401)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe("Todos os campos devem ser preenchidos");
      });
  });
  
  it('Será validado que o campo "senha" é obrigatório', async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
      })
      .expect("status", 401)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Todos os campos devem ser preenchidos');
      });
  });

  it('Será validado que o Login', async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenerg",
        password: "sh@r3n3rgy",
      })
      .expect("status", 401)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Usuario ou senha incorretos');
      });
  });
});
