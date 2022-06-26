const { mapFinderOptions } = require("sequelize/types/utils");

module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
    };
    let config = {
        tableName: 'usuarios', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Usuario = sequelize.define(alias, cols, config); 
  
        return Usuario;
}
