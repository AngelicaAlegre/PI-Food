const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {                    //Siempre definir los modelos en ingles! porque agarra las tablas y las pasa a plural, agregandole la "S".
    id: {
      type: DataTypes.UUID,                    // Usamos el UUID porque es muy improbable que hayan 2 iguales. 
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};
