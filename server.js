const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Importing Routers
const apiRouters = require("./routes/api/main");

// Initialize Express
const app = express();

// Morgan
app.use(morgan);

// Compress
app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
  req.headers["x-no-compression"] ? false : compression.filter(req, res);
}

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// using Routes
apiRouters(app);

// Create Server
app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
