const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const { Customer } = require('../../models');

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken, getUser } = require("../../utils/JWT");
var cors = require('cors')

app.use(express.json());
app.use(cookieParser());
app.use(cors()
);

app.post("/register", async (req, res) => {
    const { FirstName, password, phone, email,nationality, LastName} = req.body;
    bcrypt.hash(password, 10).then((hashedPassword) => {
        Customer.create({
            firstName: FirstName,
            lastName:LastName,
            nationality:nationality,
            password: hashedPassword,
            phone: phone,
            email: email,
        })
            .then(() => {
                res.status(200).json("Customer REGISTERED SUCCESSFULLY");
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
    const customer = await Customer.findOne({ where: { email: email } });
    if (!customer) res.status(400).json({ error: "Customer Doesn't Exist" });
    const dbPassword = customer.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res
                .status(400)
                .json({ error: "Wrong Customername and Password Combination!" });
        } else {
            const accessToken = createTokens(customer);
            // Create Cookie for 7 days
            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 24 * 7 * 1000,
                httpOnly: true
            });
            res.status(200).json(accessToken);
            
        }
    });
}); 

app.get("/profile/:data", (req, res) => {
    res.status(200).json(getUser(req.params.data));
});

app.get("/all/:data", async (req,res) => {
    // const userprof = getUser(req.params.data)
    // if (userprof["is_admin"] == 1){
    const resData = await Customer.findAll();
    res.status(200).json(resData);
    // }
    // else{
    //     res.status(400).json("Current Customer is not admin")
    // }
})


app.delete("/:id", async (req,res)=>{
    try {
        const userData = await Customer.destroy({
            where: { id: req.params.id }
        });
        if (!userData) {
            res.status(404).json({ message: 'No user with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
    
module.exports = app;