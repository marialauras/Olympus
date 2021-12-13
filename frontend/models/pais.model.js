const sql = require("./db.js");

// constructor
const Pais = function(pais) {
  this.abreviacao = pais.abreviacao;
  this.continente = pais.continente;
  this.nomeoficial = pais.nomeoficial;
  this.nomecomum = pais.nomecomum;
};

Pais.create = (newPais, result) => {
  sql.query("INSERT INTO Pais SET ?", newPais, (err, res) => {
    if (err) {
      console.log("Erro: ", err);
      result(err, null);
      return;
    }

    console.log("Pais criado: ", { id: res.insertId, ...newPais });
    result(null, { id: res.insertId, ...newPais });
  });
};

Pais.findOne = (abreviacao, result) => {
  sql.query(`SELECT * FROM Pais WHERE abreviacao = ${abreviacao}`, (err, res) => {
    if (err) {
      console.log("Erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Pais encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }

    // País não encontrado
    result({ kind: "not_found" }, null);
  });
};

Pais.getAll = (abreviacao, result) => {
  let query = "SELECT * FROM Pais";

  if (abreviacao) {
    query += ` WHERE abreviacao LIKE '%${abreviacao}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Erro: ", err);
      result(null, err);
      return;
    }

    console.log("Paises: ", res);
    result(null, res);
  });
};

Pais.update = (abreviacao, pais, result) => {
  sql.query(
    "UPDATE Pais SET continente = ?, nomeoficial = ?, nomecomum = ? WHERE abreviacao = ?",
    [pais.continente, pais.nomeoficial, pais.nomecomum, abreviacao],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // País não encontrado
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Atualizado o pais: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Pais.remove = (abreviacao, result) => {
  sql.query("DELETE FROM Pais WHERE abreviacao = ?", abreviacao, (err, res) => {
    if (err) {
      console.log("Erro: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // País não encontrado
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Pais.removeAll = result => {
  sql.query("DELETE FROM Pais", (err, res) => {
    if (err) {
      console.log("Erro: ", err);
      result(null, err);
      return;
    }

    console.log(`Deletado ${res.affectedRows} paises`);
    result(null, res);
  });
};

module.exports = Pais;