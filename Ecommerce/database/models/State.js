module.exports = (sequelize, DataTypes) => {
    let alias = "State";
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
        tableName: 'state', //Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,  //Si no tengo timestamps
    }
    const State = sequelize.define(alias, cols, config); 

    State.associate = function(models){
        State.hasMany(models.Usuario , {
            as: "usuarios",
            foreignKey: "state"
         });
    }
  
        return State;
}