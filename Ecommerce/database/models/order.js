module.exports = (sequelize, DataTypes) => {
    let alias = "Order";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(45)
        },
        total: {
            type: DataTypes.DECIMAL
        },
        date: {
            type: DataTypes.DATETIME
        }
    };
    let config = {
        tableName: 'order', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Order = sequelize.define(alias, cols, config); 

    Order.associate = function(models){
        Order.hasMany(models.Usuario , {
            as: "usuarios",
            foreignKey: "order"
         });
    }
  
        return Order;
}