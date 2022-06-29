const { mapFinderOptions } = require("sequelize/types/utils");

module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        fullName: {
            type: DataTypes.STRING(45)
        },
        gender: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.STRING(45)
        },
        birthday: {
            type: DataTypes.DATE
        },
        phone: {
            type: DataTypes.INTEGER(11)
        },
        country: {
            type: DataTypes.INTEGER
        },
        state: {
            type: DataTypes.INTEGER
        },
        newsletter: {
            type: DataTypes.STRING(3)
        },
        file: {
            type: DataTypes.STRING(100)
        },
        roles: {
            type: DataTypes.STRING(45)
        },
    };
    let config = {
        tableName: 'usuarios', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Usuario = sequelize.define(alias, cols, config); 
  
        return Usuario;
}
