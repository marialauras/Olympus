const express = require('express');

const db = require("./database");

module.exports = {

    async index (req, res) {

        const response = await db.query("select * from Pais");
        res.status(200).send(response.rows);
    },

    async join (req, res) {
        
        const response = await db.query("select C.nome, P.abreviacao, P.nomecomum from Pais as P, Continente as C where P.continente = C.cor order by C.nome")
        res.status(200).send(response.rows);
    },

    async like (req, res) {
        
        const response = await db.query("select P.abreviacao from Pais as P where P.continente = 'Azul' and P.nomeoficial like 'República%' order by P.abreviacao");
        res.status(200).send(response.rows);
    },

    async delete (req, res) {

        const add = await db.query("INSERT INTO Pais VALUES ('BRA', 'Vermelho', 'República Federativa do Brasil', 'Brasil') ");
        
        console.log(add);
        
        const response = await db.query("delete from Pais where nomecomum like '%Brasil%' ");

        res.status(200).send(response);
    }
}
