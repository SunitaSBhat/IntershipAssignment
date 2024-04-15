const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router=require("./controllers/index");
const path = require("path");
const Person= require("./modules/index");
// Initialize Express app
const app = express();
const methodOverride = require('method-override');

// Middleware to override method based on _method parameter
app.use(methodOverride('_method'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Specify the views directory
app.use(express.static(path.join(__dirname, 'public')));

// Specify the MIME type for CSS files
app.use('*.css', (req, res, next) => {
  res.set('Content-Type', 'text/css');
  next();
});
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/persondata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Mongoose connected successfully");
});
app.use('/', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});