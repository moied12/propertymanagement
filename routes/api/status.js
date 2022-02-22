const express = require('express')
const app = express()

const { Status } = require('../../models');
var cors = require('cors')

app.use(express.json());
app.post("/", async (req, res) => {
    const {value} = req.body;
    Status.create({
            value:value
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
        const resData = await Status.findAll();
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.delete('/:id', (req, res) => {
    try {
      const result =Status.destroy({
          where: { id: req.params.id }
      })
      handleResult(result)
    }catch (err) {
      res.status(400).json(err);
    }
});
app.get('/:id', async (req, res) => {
    try {
        const resData = await Status.findByPk(req.params.id)
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = app;