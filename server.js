const express  = require("express");
const app = express ();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require ("express-session");

require ("./db/db");

app.use(session({
    secret: "john 117",
    resave: false,
    saveUninitialized: false
}));


app.use (bodyParser.urlencoded({extended :false}));
app.use(bodyParser.json());

const corsOptions = {
    origin : "http://localhost:3000",
    credentials : true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


const commentController = require("./controllers/commentController");
const authController = require("./controllers/authController")

app.use("/api/v1/comments", commentController);
app.use("/auth", authController);

app.listen(process.env.PORT || 9000, () => {
    console.log("listening on port 9000");
});