const expressLib = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.router');
const myApp = expressLib();
const config = require('./config');
const db = require('./models/index')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./openapi.json')

myApp.use(bodyParser.json())

myApp.use((req, res, next) => {
    console.log('Ruta accedida:' + req.path);
    next()
});

myApp.use('/api', apiRouter)
myApp.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

db.init().then(async () => {
    await db.sequelize.sync({ force: false }).then(() => {
        console.log('Sincronización correcta con DROP');
    });
    myApp.listen(config.port, () => {
        console.log(`myApp is running at http://localhost:${config.port}`)
    });
})
    .catch(() => {
        console.log('No se pudo conectar con la DB debido a: ' + err);
})

