const express = require('express')
const app = express()

const { Commercial } = require('../../models');
var cors = require('cors')

app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// })
// );
// The `/api/auth` endpoint
app.post("/new", async (req, res) => {
    const {duration,price,name,beds,baths,area,furnished,location} = req.body;
    Commercial.create({
            duration:duration,
            price:price,
            name:name,
            beds:beds,
            baths:baths,
            area:area,
            furnished:furnished,
            location:location
        })
            .then(() => {
                res.json("Commercial REGISTERED SUCCESSFULLY");
            })
            .catch((err) => {
                if (err) {
                    res.status(400).json({ error: err.errors[0] });
                }
            });
});



app.get('/all', async (req, res) => {
    try {
        const resData = await Commercial.findAll();
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = app;