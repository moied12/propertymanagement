const express = require('express')
const app = express()

const { Property_type } = require('../../models');
var cors = require('cors')

app.use(express.json());
app.post("/", async (req, res) => {
    const {type} = req.body;
    Property_type.create({
            type:type
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
        const resData = await Property_type.findAll();
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.delete('/:id', (req, res) => {
    try {
      const result =Property_type.destroy({
          where: { id: req.params.id }
      })
      handleResult(result)
    }catch (err) {
      res.status(400).json(err);
    }
});
app.get('/:id', async (req, res) => {
    try {
        const resData = await Property_type.findByPk(req.params.id)
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = app;