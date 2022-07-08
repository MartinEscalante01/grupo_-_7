module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        fullName: {
            type: DataTypes.STRING(45)
        },
        idGender: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.STRING(45)
        },
        birthday: {
            type: DataTypes.DATE
        },
        phone: {
            type: DataTypes.INTEGER(11)
        },
        idCountry: {
            type: DataTypes.INTEGER
        },
        idState: {
            type: DataTypes.INTEGER
        },
        newsletter: {
            type: DataTypes.STRING(3)
        },
        file: {
            type: DataTypes.STRING(100)
        },
        idRoles: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tableName: 'Users', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function(models){
        User.belongsTo(models.Rol , {
            as: "roles",
            foreignKey: "idRoles"
         });
    };

    User.associate = function(models){
        User.belongsTo(models.Gender , {
            as: "gender",
            foreignKey: "idGender"
         });
    };

    // User.associate = function(models){
    //     User.belongsTo(models.State , {
    //         as: "state",
    //         foreignKey: "idState"
    //      });
    // };

    // User.associate = function(models){
    //     User.belongsTo(models.Country , {
    //         as: "country",
    //         foreignKey: "idCountry"
    //      });
    // };


        return User;
}
