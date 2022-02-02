const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const { User } = require('../../models');

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken, getUser } = require("../../utils/JWT");
var cors = require('cors')

app.use(express.json());
app.use(cookieParser());
app.use(cors()
);

app.post("/register", async (req, res) => {
    const { name, password, phone, email } = req.body;
    bcrypt.hash(password, 10).then((hashedPassword) => {
        User.create({
            name: name,
            password: hashedPassword,
            phone: phone,
            email: email
        })
            .then(() => {
                res.json("USER REGISTERED SUCCESSFULLY");
            })
            .catch((err) => {
                if (err) {
                    res.status(400).json({ error: err.errors[0].message });
                }
            });
    });
});

app.post("/login",cors(), async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) res.status(400).json({ error: "User Doesn't Exist" });
    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res
                .status(400)
                .json({ error: "Wrong Username and Password Combination!" });
        } else {
            const accessToken = createTokens(user);
            // Create Cookie for 7 days
            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 24 * 7 * 1000,
                httpOnly: true
            });
            res.status(200).json(accessToken);
            
        }
    });
});

app.get("/profile", (req, res) => {
    res.json(getUser(req.cookies["access-token"]));
});

module.exports = app;