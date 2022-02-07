const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'static')));

app.use(userRoutes);
app.use(adminRoutes);
app.use(express.static(__dirname));

app.listen(3000);