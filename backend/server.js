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

connection.connect(err => {
    if(err) {
        return err;
    } 
});

// console.log(connection);

app.get('/', function(req, res) {
    res.send('go to /products to see all products in database');
});

app.get('/products', function(req, res) {
    connection.query(SELECT_ALL_PRODUCTS, function(error, results) {
        if(error){
            return res.send(err)
        } else {
            return res.json({
                data: results
            });
        }
    });
});

app.get('/products/add', (req, res) => {
    const { name, price } = req.query;
    const INSERT_PRODUCTS_QUERY = `INSERT INTO products (productName, productPrice) VALUES('${name}', '${price}')`;
    connection.query(INSERT_PRODUCTS_QUERY, (err, result) => {
        if(err){
            return res.send(err);
        } else {
            return res.send('successfully added the product');
        }
    });
});

app.get('/create', (req, res) => {
    const CREATE_DATABASE = `CREATE DATABASE react`;

    connection.query(CREATE_DATABASE, (err, result) => {
        if(err){
            res.send(err); 
        } else {
            console.log('Database successfully created');
        }
    });

});

app.get('/create/table', (req, res) => {
    const CREATE_TABLE = `CREATE TABLE products 
    (productID int AUTO_INCREMENT, 
    productName VARCHAR(255), 
    productPrice VARCHAR(255), 
    PRIMARY KEY(productID))`;
    
    connection.query(CREATE_TABLE, (err, result) => {
        if(err){
            res.send(err); 
        } else {
            console.log('Table successfully created');
        }
    });
});

