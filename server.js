'use strict'
console.log('This is the top part of the server.js page');
const fs = require('fs');
const path = require('path');
const knexPath = path.join(__dirname, 'knexfile.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'development';
const morgan = require('morgan');
