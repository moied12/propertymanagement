const express = require('express')
const app = express()

const { Residential_sales, Cities, Rent } = require('../../models');
var cors = require('cors')
app.use(cors());
app.use(express.json());

app.post("/new", async (req, res) => {
    const { 
        price,
        commission,
        date,
        payment_information,
        depsoit,
        user_id,
        customer_id,
        residential_id } = req.body;
        Residential_sales.create({
                price:price,
                commission:commission,
                date:date,
                payment_information:payment_information,
                depsoit:depsoit,
                user_id:user_id,
                customer_id:customer_id,
                residential_id:residential_id
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
      const resData = await Residential_sales.findAll();
      
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
      const productData = await Residential_sales.findByPk(req.params.id);
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  app.delete('/:id', (req, res) => {
    try {
      const result = Residential_sales.destroy({
        where: { id: req.params.id }
      })
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = app;