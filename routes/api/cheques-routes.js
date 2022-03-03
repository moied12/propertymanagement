const express = require('express')
const app = express()

const { Cheques } = require('../../models');
var cors = require('cors')
app.use(cors());
app.use(express.json());

app.post("/new", async (req, res) => {
    const { 
        amount,
        date,
        customer_id,
        commercial_sale_id,
        residential_sale_id,
         } = req.body;
        Cheques.create({
            amount:amount,
                date:date,
                commercial_sale_id:commercial_sale_id,
                residential_sale_id:residential_sale_id,
                customer_id:customer_id,
        })
      .then(() => {
        res.status(200).json("Sale Added");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err.errors });
        }
      });
  });


  app.get('/all', async (req, res) => {
    try {
      const resData = await Cheques.findAll();
      
      res.status(200).json(resData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  
  // get one product
  app.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const productData = await Cheques.findByPk(req.params.id);
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  app.delete('/:id', (req, res) => {
    try {
      const result = Cheques.destroy({
        where: { id: req.params.id }
      })
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = app;