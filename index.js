const express = require('express');
const app = express();
const port = 8080;

const swaggerapi = require('./swagger');
swaggerapi(app);

/**
* @swagger
* definitions:
*   User:
*     properties:
*       username:
*         type: string
*       password:
*         type: string
*       email:
*         type: string
*/


/**
* @swagger
* /:
*   get:
*     description: Returns the root of the api
*     produces:
*      - application/json
*     responses:
*       200:
*         description: A 'hello world'.
*         schema:
*           type: string
*/
app.get('/', function(req, res) {
    res.end('Initial page');
});


/**
* @swagger
* /users:
*   get:
*     description: Returns users
*     produces:
*      - application/json
*     responses:
*       200:
*         description: users
*         schema:
*           type: object
*           $ref: '#/definitions/User'
*/
app.get('/users', function(req, res) {
    res.end('Initial users page');
});


app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
});
