module.exports = (sequelize, DataTypes) => {
    let alias = "Gender";
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
        tableName: "gender", //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Gender = sequelize.define(alias, cols, config); 

    Gender.associate = function(models){
        Gender.hasMany(models.User , {
            as: "users",
            foreignKey: "idGender"
         });
    };

    Gender.associate = function(models){
        Gender.hasMany(models.Producto , {
            as: "productos",
            foreignKey: "gender"
         });
    };

        return Gender;
}