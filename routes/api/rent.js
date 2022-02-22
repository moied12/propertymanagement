const express = require('express')
const app = express()

const { Rent } = require('../../models');

app.use(express.json());
app.post("/", async (req, res) => {
    const {duration} = req.body;
    Rent.create({
            duration:duration
        })
            .then(() => {
                res.json("Rent ADDED SUCCESSFULLY");
            })
            .catch((err) => {
                if (err) {
                    res.status(400).json({ error: err.errors[0] });
                }
            });
});
app.get('/all', async (req, res) => {
    try {
        const resData = await Rent.findAll();
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.delete('/:id', (req, res) => {
    try {
      const result =Rent.destroy({
          where: { id: req.params.id }
      })
      handleResult(result)
    }catch (err) {
      res.status(400).json(err);
    }
});
app.get('/:id', async (req, res) => {
    try {
        const resData = await Rent.findByPk(req.params.id)
        res.status(200).json(resData);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = app;