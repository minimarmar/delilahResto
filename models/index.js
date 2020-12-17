const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config')

const sequelize = new Sequelize({
    dialect: config.database.dialect,
    username: config.database.username,
    password: config.database.password,
    host: config.database.host,
    port: config.database.port,
    database: config.database.database
});

const init = async () => {
    console.log('Conectando con la DB...')
    return await sequelize.authenticate();
}


const db = {}
db.init = init;
db.DataTypes = DataTypes;
db.sequelize = sequelize;
db.productos = require('./productos.models')(sequelize, DataTypes);
db.pedidos = require('./pedidos.models')(sequelize, DataTypes);
db.usuarios = require('./usuarios.models')(sequelize, DataTypes);


//relaciones entre las bases
db.pedidos.belongsToMany(db.productos, { through: "pedidosProductos" })
db.productos.belongsToMany(db.pedidos, { through: "pedidosProductos" })




module.exports = db;
