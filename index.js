require('dotenv').config();
// on récupère le module  npm express
const express = require('express');
// le déclenchement du module express est stocké dans une variable qui s'apelle app
const app = express();

const router = require('./app/router');

const port = process.env.PORT || 3000

app.use(router);

app.listen(port, () => {
    console.log('server launched on: http://localhost:' + port);
})

