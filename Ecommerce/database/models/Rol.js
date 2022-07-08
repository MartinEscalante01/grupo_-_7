module.exports = (sequelize, DataTypes) => {
    let alias = "Rol";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(15)
        }
    };
    let config = {
        tableName: "roles", //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Rol = sequelize.define(alias, cols, config); 
    return Rol;
}