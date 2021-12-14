const express = require('express');

const db = require("./database");

module.exports = {

    async index (req, res) {

        const response = await db.query("select * from Pais");
        res.status(200).send(response.rows);
    },

    async join (req, res) {
        
        const response = await db.query("select * from Pais as P where P.continente = 'Azul' ");
        res.status(200).send(response.rows);
    },

    async like (req, res) {
        
        const response = await db.query("select P.abreviacao from Pais as P where P.continente = 'Azul' and P.nomeoficial like 'República%' ");
        res.status(200).send(response.rows);
    },
}
