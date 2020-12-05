const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
/**********************************************
 * Basic Setup
 * ==================================
 * Bodyparser
 * Handlebars
 *
 ***********************************************/
// set up body parser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));
// set handlebars engine
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.get("/", function (incoming, outgoing, next) {
  outgoing.render("index");
});

app.use(require("./config/helpers/error_middleware").all);

app.listen(3001, () => {
  console.log("Application listening to port 3001!!");
});
