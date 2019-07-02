const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
require('dotenv').config();

const API_PORT = process.env.PORT;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb://localhost:27017/react-node-website';