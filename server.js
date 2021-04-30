const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT;
app.use(express.static(__dirname + "/static"));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(
    session({
        secret: "key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365,
        },
    })
);
app.set("trust proxy", true);

//!!! end of app user
//* requires

require("./modules/routing.js")(
    app,
);

//!!!end of reqirements

app.listen(PORT, () => console.log(`Serwer zasuwa na PORCIE : ${PORT}`));