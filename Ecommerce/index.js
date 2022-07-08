const db = require('./database/models');

// db.Usuario.findAll().then(data => console.log(data))

db.User.findAll({
    include: [
        // {association: "roles"},
        {association: "gender"},
        // {association: "country"},
        // {association: "state"}
]}).then(data => console.log(data[1].dataValues))
