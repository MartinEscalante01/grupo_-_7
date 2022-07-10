module.exports = (sequelize, DataTypes) => {
    let alias = "Size";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sizes: {
            type: DataTypes.STRING(2)
        }
    };
    let config = {
        tableName: 'sizes', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Size = sequelize.define(alias, cols, config); 

    Size.associate = function(models){
        Size.hasMany(models.Producto , {
            as: "Producto",
            foreignKey: "size"
         });
    };
  
        return Size;
}