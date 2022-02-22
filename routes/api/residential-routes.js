const express = require('express')
const app = express()

const { Residential, Cities, Rent } = require('../../models');
var cors = require('cors')
app.use(cors());
app.use(express.json());


app.post("/new", async (req, res) => {
  const { duration_id, price, name, beds, baths, area, furnished, location, property_type_id, status_id, city_id, description, urls, user_id, onPlan } = req.body;
  Residential.create({
    duration_id: duration_id,
    images: urls,
    description: description,
    price: price,
    name: name,
    beds: beds,
    baths: baths,
    area: area,
    furnished: furnished,
    location: location,
    property_type_id: property_type_id,
    status_id: status_id,
    city_id: city_id,
    user_id: user_id,
    onPlan: onPlan
  })
    .then(() => {
      res.json("Residential REGISTERED SUCCESSFULLY");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err.errors });
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



// get one product
app.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Residential.findByPk(req.params.id);
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.put('/:id', (req, res) => {
  try {
    const result = Residential.update(req.body,
      { where: { id: req.params.id } }
    )
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete('/:id', (req, res) => {
  try {
    const result = Residential.destroy({
      where: { id: req.params.id }
    })
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/byuser/:id', async (req, res) => {
  try {
    const productData = await Residential.findAll({
      where: {
        user_id: req.params.id,
      }
    })
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = app;