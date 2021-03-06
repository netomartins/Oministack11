const express = require('express');
const cors = require ('cors');
const { errors } = require ('celebrate');
const routes = require('./routes');

const app = express();

/* 
############### para ambiente de produção####################
app.use(cors({
    origin: 'http://meuapp.com'
}
)); */

app.use(cors()); 
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);

module.exports = app;

