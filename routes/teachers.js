const express = require('express');
const db = require('../db');

const router = express.Router();

const Teacher = require('../models/teacher');

router.get('/', async (req, res) => {
  try {
    const data = await db.collection('teachers').get();
    const result = [];
    if(data.empty) {
      res.status(404).send('No teacher record found');
    }else {
      data.forEach(doc => {
        const course = new Teacher({
          first_name: doc.data().first_name,
          last_name: doc.data().last_name,
          courses: doc.data().courses,
          education: doc.data().education,
          about: doc.data().about,
          photo: doc.data().photo,
          id: doc.id
        })
        result.push(course)
      })}

    res.json(result)
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = {
  routes: router
}