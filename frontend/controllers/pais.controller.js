const Pais = require("../models/pais.model.js");

// Cria e salva um novo país
exports.create = (req, res) => {
  // Validando o request
  if (!req.body) {
    res.status(400).send({
      message: "Conteudo nao pode estar vazio!"
    });
  }

  // Criando um pais
  const pais = new Pais({
    abreviacao: req.body.title,
    continente: req.body.description,
    nomeoficial: req.body.nomeoficial,
    nomecomum: req.body.nomecomum
  });

  // Salva país no banco de dados
  Pais.create(pais, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro na criacao do pais"
      });
    else res.send(data);
  });
};

// Le todos os países no banco de dados
exports.findAll = (req, res) => {
    const abreviacao = req.query.abreviacao;

    Tutorial.getAll(abreviacao, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Erro na leitura dos paises"
        });
      else res.send(data);
    });
};

// Acha um país com base na abreviação dele
exports.findOne = (req, res) => {
    Tutorial.findOne(req.params.abreviacao, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Pais nao encontrado com abreviacao ${req.params.abreviacao}.`
            });
          } else {
            res.status(500).send({
              message: "Erro recuperando pais com abreviacao " + req.params.abreviacao
            });
          }
        } else res.send(data);
      });
};

// Atualiza um país através da sua abreviação
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Conteudo nao pode estar vazio!"
    });
  }

  console.log(req.body);

  Tutorial.update(
    req.params.abreviacao,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Pais nao encontrado com abreviacao ${req.params.abreviacao}.`
          });
        } else {
          res.status(500).send({
            message: "Erro atualizando pais com abreviacao " + req.params.abreviacao
          });
        }
      } else res.send(data);
    }
  );
};

// Deleta um país em específico com base na sua abreviação
exports.delete = (req, res) => {
    Tutorial.remove(req.params.abreviacao, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Pais nao encontrado com abreviacao ${req.params.abreviacao}.`
            });
          } else {
            res.status(500).send({
              message: "Erro deletando pais com abreviacao " + req.params.abreviacao
            });
          }
        } else res.send({ message: `Pais deletado com sucesso!` });
      });
};

// Deleta todos os países do banco de dados
exports.deleteAll = (req, res) => {
    Tutorial.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Erro removendo todos os paises"
          });
        else res.send({ message: `Todos os paises foram deletados com sucesso!` });
      });
};