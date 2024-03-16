const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectToServer } = require("./db");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const { auth, requiresAuth } = require("express-openid-connect");

app.use(cors());
app.use(bodyParser.json());

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        res.send('Logged out')
    } else {
        res.send('Logged in');
    }
});

//use the requiresAuth middleware for the routes i want to protect
// app.use('/', requiresAuth(), routes) //protect all routes
app.use('/', routes) //protect all routes

// Add the /profile route from the first code block
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(`hello ${req.oidc.user.name}`);
});

//error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
});

connectToServer((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    }
})