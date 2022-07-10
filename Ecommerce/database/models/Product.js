module.exports = (sequelize, DataTypes) => {
    let alias = "Producto";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(45)
        },
        description: {
            type: DataTypes.TEXT
        },
        category: {
            type: DataTypes.INTEGER
        },
        size: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        },
        price: {
            type: DataTypes.INTEGER(11)
        },
        gender: {
            type: DataTypes.INTEGER
        },
        brand: {
            type: DataTypes.INTEGER
        },
        file: {
            type: DataTypes.STRING(45)
        }
    };
    let config = {
        tableName: 'productos', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const Product = sequelize.define(alias, cols, config); 

    // Product.associate = function(models){
    //     Product.belongsTo(models.Gender , {
    //         as: "genero",
    //         foreignKey: "gender"
    //      });
    // };

    // Product.associate = function(models){
    //     Product.belongsTo(models.Brand , {
    //         as: "marcas",
    //         foreignKey: "brand"
    //      });
    // };

    // Product.associate = function(models){
    //     Product.belongsTo(models.Category , {
    //         as: "categories",
    //         foreignKey: "category"
    //      });
    // };

    Product.associate = function(models){
        Product.belongsTo(models.Size , {
            as: "sizes",
            foreignKey: "size"
         });
    };

        return Product;
}
