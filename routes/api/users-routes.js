const express = require('express')
const app = express()

// const jwt = require('jsonwebtoken')
const { User } = require('../../models');

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("../../utils/JWT");
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
            // const accessToken = createTokens(user);
            //Create Cookie for 7 days
            // res.cookie("access-token", accessToken, {
            //     maxAge: 60 * 60 * 24 * 7 * 1000,
            //     httpOnly: true,
            // });

            res.json("LOGGED IN");
        }
    });
});

// app.delete('/logout', (req, res) => {
//     refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//     res.sendStatus(204)
// })

app.get("/profile", validateToken, (req, res) => {
    res.json(req.user);
});

// let refreshTokens = []

// app.post('/token', (req, res) => {
//     const refreshToken = req.body.token
//     if (refreshToken == null) return res.sendStatus(401)
//     if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         const accessToken = generateAccessToken({ name: user.name })
//         res.json({ accessToken: accessToken })
//     })
// })

// app.delete('/logout', (req, res) => {
//     refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//     res.sendStatus(204)
// })

// app.post('/login', (req, res) => {
//     // Authenticate User

//     const username = req.body.username
//     const password = req.body.password
//     const user = { name: username }

//     const accessToken = generateAccessToken(user)
//     const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
//     refreshTokens.push(refreshToken)
//     res.json({ accessToken: accessToken, refreshToken: refreshToken })
// })

// function generateAccessToken(user) {
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
// }

module.exports = app;