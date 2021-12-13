module.exports = (sequelize, Sequelize) => {
    const Olympus = sequelize.define("olympus", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Olympus;
  };