module.exports = (sequelize, DataTypes) => {
    let alias = "Country";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(45)
        }
    };
    let config = {
        tableName: 'country', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Country = sequelize.define(alias, cols, config); 

    Country.associate = function(models){
        Country.hasMany(models.Usuario , {
            as: "usuarios",
            foreignKey: "country"
         });
    }
  
        return Country;
}