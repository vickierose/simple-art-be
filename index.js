const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require("firebase-admin");

const db = require("./db");

const corsesRoutes = require('./routes/courses');
const teachersRoutes = require('./routes/teachers');
const formsRoutes = require('./routes/forms');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use('/courses', corsesRoutes.routes);
app.use('/teachers', teachersRoutes.routes);
app.use('/form', formsRoutes.routes);

app.listen(PORT, () => console.log(`Server started at ${PORT}`))
