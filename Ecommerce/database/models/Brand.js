module.exports = (sequelize, DataTypes) => {
    let alias = "Brand";
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
        tableName: 'brand', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Brand = sequelize.define(alias, cols, config); 

    Brand.associate = function(models){
        Brand.hasMany(models.Producto , {
            as: "productos",
            foreignKey: "brand"
         });
    }
  
        return Brand;
}