const express = require('express')
const app = express()

const { Commercial } = require('../../models');
var cors = require('cors')

app.use(express.json());
app.post("/new", async (req, res) => {
    const {duration,price,name,area,furnished,location,property_type_id, status_id,city_id} = req.body;
    Commercial.create({
            duration:duration,
            price:price,
            name:name,
            area:area,
            furnished:furnished,
            location:location,
            property_type_id:property_type_id,
            status_id:status_id,
            city_id:city_id,

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