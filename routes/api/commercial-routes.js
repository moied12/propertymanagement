const express = require('express')
const app = express()

const { Commercial, Property_type, Status } = require('../../models');
var cors = require('cors')
app.use(cors());
app.use(express.json());
app.post("/new", async (req, res) => {
  const { duration_id, price, name, area, furnished, location, property_type_id, status_id, city_id, description, urls, user_id, onPlan } = req.body;
  Commercial.create({
    duration_id: duration_id,
    images: urls,
    description: description,
    price: price,
    name: name,
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




// get one product
app.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Commercial.findByPk(req.params.id);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});


app.put('/:id', (req, res) => {
  try {
    const result = Commercial.update(req.body,
      { where: { id: req.params.id } }
    )
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete('/:id', (req, res) => {
  try {
    const result = Commercial.destroy({
      where: { id: req.params.id }
    })
    handleResult(result)
  } catch (err) {
    res.status(400).json(err);
  }
});


app.get('/byuser/:id', async (req, res) => {
  try {
    const productData = await Commercial.findAll({
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