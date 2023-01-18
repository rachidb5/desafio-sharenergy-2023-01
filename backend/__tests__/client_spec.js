const frisby = require("frisby");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = "http://localhost:3000";
const mongoDbUrl = `mongodb+srv://rachid:${process.env.DB_PWD}@cluster0.gvqznrh.mongodb.net/?retryWrites=true&w=majority`;

describe("1 - Endpoint para o cadastro de clientes", () => {
  it('Será validado que não é possível cadastrar cliente sem o campo "name"', async () => {
    await frisby
      .post(`${url}/novo-cliente`, {
        name: "auth test",
        email: "test@gmail.com",
        phone: 12345679908,
        address: "rua teste, 300",
        cpf: "874.562.154-12",
      })
      .expect("status", 401)
      .then((responseLogin) => {
        const { json } = responseLogin;
        expect(json.message).toBe("Usuario não autenticado");
      });
  });

  it('Será validado que não é possível cadastrar cliente sem o campo "name"', async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "",
            email: "test@gmail.com",
            phone: 12345679908,
            address: "rua teste, 300",
            cpf: "874.562.154-12",
          })
          .expect("status", 400)
          .then((responseLogin) => {
            const { json } = responseLogin;
            expect(json.message).toBe("Insira um nome");
          });
      });
  });

  it('Será validado que não é possível cadastrar cliente sem o campo "email"', async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "test user",
            email: "",
            phone: 12345679908,
            address: "rua teste, 300",
            cpf: "874.562.154-12",
          })
          .expect("status", 400)
          .then((responseLogin) => {
            const { json } = responseLogin;
            expect(json.message).toBe("Email Inválido");
          });
      });
  });
  it("Será validado que não é possível cadastrar cliente com email inválido", async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "test user",
            email: "asdasd",
            phone: 12345679908,
            address: "rua teste, 300",
            cpf: "874.562.154-12",
          })
          .expect("status", 400)
          .then((responseLogin) => {
            const { json } = responseLogin;
            expect(json.message).toBe("Email Inválido");
          });
      });
  });
  it("Será validado que não é possível cadastrar cliente sem endereço", async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "test user",
            email: "test@gmail.co",
            phone: 12345679908,
            address: "",
            cpf: "874.562.154-12",
          })
          .expect("status", 400)
          .then((responseLogin) => {
            const { json } = responseLogin;
            expect(json.message).toBe("Insira um endereço");
          });
      });
  });
  it("Será validado que não é possível cadastrar cliente sem telefone", async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "test user",
            email: "test@gmail.co",
            phone: "",
            address: "rua 2, n 900b",
            cpf: "874.562.154-12",
          })
          .expect("status", 400)
          .then((responseLogin) => {
            const { json } = responseLogin;
            expect(json.message).toBe("Insira um telefone válido");
          });
      });
  });
  it("Será validado que não é possível cadastrar cliente com telefone invalido", async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "test user",
            email: "test@gmail.co",
            phone: 564654,
            address: "rua 2, n 900b",
            cpf: "874.562.154-12",
          })
          .expect("status", 400)
          .then((responseLogin) => {
            const { json } = responseLogin;
            expect(json.message).toBe("Insira um telefone válido");
          });
      });
  });
  it("Será validado que é possível cadastrar cliente", async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .post(`${url}/novo-cliente`, {
            name: "user",
            email: "root@email.com",
            cpf: "444.555.666-44",
            phone: 85998310232,
            address: "Rua 3, 900",
          })
          .expect("status", 201);
      });

    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            expect(json[0].name).toBe("user");
            expect(json[0].email).toBe("root@email.com");
            expect(json[0].cpf).toBe("444.555.666-44");
            expect(json[0].phone).toBe(85998310232);
            expect(json[0].address).toBe("Rua 3, 900");
          });
      });
  });
});

describe("2 - Endpoint para visualização de clientes", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db("test");
    await db
      .collection("clients")
      .deleteMany({})
      .then(() => console.log("ok"));
    const users = [
      {
        name: "user",
        email: "root@email.com",
        cpf: "444.555.666-44",
        phone: 85998310232,
        address: "Rua 3, 900",
      },
    ];
    await db.collection("clients").insertMany(users);
  });

  afterAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db("test");
    await db
      .collection("clients")
      .deleteMany({})
      .then(() => console.log("ok"));
    await connection.close();
  });

  it("Será validado que não é possível visualizar clientes sem estar autenticado ", async () => {
    await frisby
      .get(`${url}/clientes/`)
      .expect("status", 401)
      .then((responseLogin) => {
        const { json } = responseLogin;
        expect(json.message).toBe("Usuario não autenticado");
      });
  });
  it("Será validado que é possível visualizar clientes estando autenticado ", async () => {
    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            expect(json[0].name).toBe("user");
            expect(json[0].email).toBe("root@email.com");
            expect(json[0].cpf).toBe("444.555.666-44");
            expect(json[0].phone).toBe(85998310232);
            expect(json[0].address).toBe("Rua 3, 900");
          });
      });
  });
});

describe("3 - Endpoint para visualização de cliente por id", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db("test");
    await db
      .collection("clients")
      .deleteMany({})
      .then(() => console.log("ok"));
    const users = [
      {
        name: "user",
        email: "root@email.com",
        cpf: "444.555.666-44",
        phone: 85998310232,
        address: "Rua 3, 900",
      },
    ];
    await db.collection("clients").insertMany(users);
  });

  afterAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db("test");
    await db
      .collection("clients")
      .deleteMany({})
      .then(() => console.log("ok"));
    await connection.close();
  });

  it("Será validado que não é possível visualizar cliente sem estar autenticado ", async () => {
    let resultClient;

    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            resultClient = json[0];
          });
      });

    await frisby
      .get(`${url}/clientes/${resultClient._id}`)
      .expect("status", 401);
  });
  it("Será validado que é possível visualizar cliente estando autenticado ", async () => {
    let resultClient;

    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            resultClient = json[0];
          });
      });

    await frisby
    .post(`${url}/login/`, {
      userName: "desafiosharenergy",
      password: "sh@r3n3rgy",
    }).expect("status", 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      return frisby
        .setup({
          request: {
            headers: {
              Authorization: result.token,
              "Content-Type": "application/json",
            },
          },
        })
        .get(`${url}/clientes/${resultClient._id}`)
        .expect("status", 200)
        .then((response) => {
          const { json } = response;
          expect(json.name).toBe("user");
          expect(json.email).toBe("root@email.com");
          expect(json.cpf).toBe("444.555.666-44");
          expect(json.phone).toBe(85998310232);
          expect(json.address).toBe("Rua 3, 900");
        });
    })
  });
  it("Será validado que é possível visualizar cliente inexistemte", async () => {
    let resultClient;

    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            resultClient = json[0];
          });
      });

    await frisby
    .post(`${url}/login/`, {
      userName: "desafiosharenergy",
      password: "sh@r3n3rgy",
    }).expect("status", 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      return frisby
        .setup({
          request: {
            headers: {
              Authorization: result.token,
              "Content-Type": "application/json",
            },
          },
        })
        .get(`${url}/clientes/123123`)
        .expect("status", 404)
        .then((responseLogin) => {
          const { json } = responseLogin;
          expect(json.message).toBe('usuario não encontrado');
        });
    })
  });
});
describe("4 - Endpoint para apagar de cliente por id", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db("test");
    await db
      .collection("clients")
      .deleteMany({})
      .then(() => console.log("ok"));
    const users = [
      {
        name: "user",
        email: "root@email.com",
        cpf: "444.555.666-44",
        phone: 85998310232,
        address: "Rua 3, 900",
      },
    ];
    await db.collection("clients").insertMany(users);
  });

  afterAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db("test");
    await db
      .collection("clients")
      .deleteMany({})
      .then(() => console.log("ok"));
    await connection.close();
  });

  it("Será validado que não é possível deletar cliente sem estar autenticado ", async () => {
    let resultClient;

    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            resultClient = json[0];
          });
      });

    await frisby
      .delete(`${url}/clientes/${resultClient._id}`)
      .expect("status", 401);
  });
  it("Será validado que é possível deletar cliente estando autenticado ", async () => {
    let resultClient;

    await frisby
      .post(`${url}/login/`, {
        userName: "desafiosharenergy",
        password: "sh@r3n3rgy",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                "Content-Type": "application/json",
              },
            },
          })
          .get(`${url}/clientes`)
          .expect("status", 200)
          .then((response) => {
            const { json } = response;
            resultClient = json[0];
          });
      });

    await frisby
    .post(`${url}/login/`, {
      userName: "desafiosharenergy",
      password: "sh@r3n3rgy",
    }).expect("status", 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      return frisby
        .setup({
          request: {
            headers: {
              Authorization: result.token,
              "Content-Type": "application/json",
            },
          },
        })
        .delete(`${url}/clientes/${resultClient._id}`)
        .expect("status", 204)
    })
  });
});
