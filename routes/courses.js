const express = require('express');
const db = require('../db');

const router = express.Router();

const Course = require('../models/course');

router.get('/', async (req, res) => {
  try {
    const data = await db.collection('courses').get();
    const result = [];
    if(data.empty) {
      res.status(404).send('No course record found');
    }else {
      data.forEach(doc => {
        const course = new Course({
          name:doc.data().name,
          price:doc.data().price,
          currency: doc.data().currency,
          description_short: doc.data().description_short,
          description_full: doc.data().description_full,
          duration: doc.data().duration,
          periodicity: doc.data().periodicity,
          level: doc.data().level,
          groups: doc.data().groups,
          full_img_url: doc.data().full_img_url,
          thumbnail_img_url: doc.data().thumbnail_img_url,
          id: doc.id
        })
        result.push(course)
      })}

    res.json(result)
  } catch (error) {
    res.status(400).send(error.message);
  }
})

router.post('/new-course', async(req, res) => {
  try {
    const data = req.body;
    console.log("new course data", data)
    await db.collection('courses').doc().set(data);
    res.send('Record saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = {
  routes: router
}