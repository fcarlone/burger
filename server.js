const express = require("express");
const exphbs = require("express-handlebars");
// Import routes
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 3000;

const app = express();

// Give server access to routes
app.use(routes);

// Serve static content
app.use(express.static("public"));

// Middleware to parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Add listener
app.listen(PORT, function () {
  console.log(`Listening on PORT: ${PORT}`)
});
