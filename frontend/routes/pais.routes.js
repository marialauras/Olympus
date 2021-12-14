module.exports = app => {
    const pais = require("../controllers/pais.controller.js");
  
    var router = require("express").Router();
  
    // Cria um novo país
    router.post("/", pais.create);
  
    // Le todos os países
    router.get("/", pais.findAll);
  
    // Le apenas um únco país
    router.get("/:abreviacao", pais.findOne);
  
    // Atualiza um país
    router.put("/:abreviacao", pais.update);
  
    // Deleta um país
    router.delete("/:abreviacao", pais.delete);
  
    // Deleta todos os países
    router.delete("/", pais.deleteAll);
  
    app.use('/api/pais', router);
  };