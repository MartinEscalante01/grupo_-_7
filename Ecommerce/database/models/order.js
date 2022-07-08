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
            type: DataTypes.DATE
        }
    };
    let config = {
        tableName: 'order', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Order = sequelize.define(alias, cols, config); 
  
        return Order;
}