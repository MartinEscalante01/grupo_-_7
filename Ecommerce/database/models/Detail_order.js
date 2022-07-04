module.exports = (sequelize, DataTypes) => {
    let alias = "Detail_order";
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
        tableName: 'detail_order', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Detail_order = sequelize.define(alias, cols, config); 

    Detail_order.associate = function(models){
        Detail_order.belongsToMany(models.Producto , {
            as: "productos",
            through: "detalle_de_orden",
            foreignKey: "id_usuarios",
            otherKey: "id_productos",
            timestamps: false,
         });
    }
  
        return Detail_order;
}