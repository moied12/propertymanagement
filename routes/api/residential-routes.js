const express = require('express')
const app = express()

const { Residential } = require('../../models');
var cors = require('cors')

app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// })
// );
// The `/api/auth` endpoint
app.post("/new", async (req, res) => {
    const {duration,price,name,beds,baths,area,furnished,location,property_type_id, status_id,city_id} = req.body;
    Residential.create({
            duration:duration,
            price:price,
            name:name,
            beds:beds,
            baths:baths,
            area:area,
            furnished:furnished,
            location:location,
            property_type_id:property_type_id,
            status_id:status_id,
            city_id:city_id,

        })
            .then(() => {
                res.json("Residential REGISTERED SUCCESSFULLY");
            })
            .catch((err) => {
                if (err) {
                    res.status(400).json({ error: err.errors[0] });
                }
            });
});



app.get('/all', async (req, res) => {
    try {
        const resData = await Residential.findAll();
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = app;