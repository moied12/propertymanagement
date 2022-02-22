const express = require('express')
const app = express()

const { Cities } = require('../../models');

app.use(express.json());
app.post("/", async (req, res) => {
    const {city} = req.body;
    Cities.create({
            city:city
        })
            .then(() => {
                res.json("CITY ADDED SUCCESSFULLY");
            })
            .catch((err) => {
                if (err) {
                    res.status(400).json({ error: err.errors[0] });
                }
            });
});
app.get('/all', async (req, res) => {
    try {
        const resData = await Cities.findAll();
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.delete('/:id', (req, res) => {
    try {
      const result =Cities.destroy({
          where: { id: req.params.id }
      })
      handleResult(result)
    }catch (err) {
      res.status(400).json(err);
    }
});
app.get('/:id', async (req, res) => {
    try {
        const resData = await Cities.findByPk(req.params.id)
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = app;