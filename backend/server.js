const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();

const API_PORT = process.env.PORT;

const app = express();
app.use(cors());

const router = express.Router();
const SELECT_ALL_PRODUCTS = 'SELECT * FROM products';

app.listen(API_PORT, () => {
    console.log(`App listening on port ` + API_PORT);
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "react"
});

connection.connect(function(err) {
    (err) ? console.log(err) : console.log("Database successfully connected");
});

app.get('/', (req, res) => {
    res.send('Hello World from the product server. <br /> Go to /products to see all the products')
});

app.get('/products', function(req, res) {
    connection.query(SELECT_ALL_PRODUCTS, function(error, result) {
        if(error){
            throw error;
        } else {
            res.send(result);
        }
    });
});

app.get('/products/add', (req, res) => {
    const { name, price } = req.query;
    const INSERT_PRODUCTS_QUERY = `INSERT INTO ` + process.env.TABLE + ` (` + process.env.COLUMN1 + `, ` + process.env.COLUMN2 + `) VALUES('${name}', '${price}')`;
    connection.query(INSERT_PRODUCTS_QUERY, (err, result) => {
        if(err){
            return res.send(err);
        } else {
            return res.send('successfully added the product');
        }
    });
});

