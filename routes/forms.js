const express = require('express');

const router = express.Router();

const Teacher = require('../models/teacher');

router.post('/apply', async (req, res) => {
  try {
    const data = req.body;
    console.log('data', data)
    res.status(200).send('Todo esta bien')
  } catch (error) {
    res.status(400).send(error.message);
  }
})

router.post('/subscribe', async (req, res) => {
  try {
    const data = req.body;
    console.log('data', data)
    res.status(200).send('Todo esta bien')
  } catch (error) {
    res.status(400).send(error.message);
  }
})
module.exports = {
  routes: router
}