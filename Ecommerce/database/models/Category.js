module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(25)
        }
    };
    let config = {
        tableName: 'category', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Category = sequelize.define(alias, cols, config); 
  
        return Category;
}