const express = require("express");
const admin = require("firebase-admin");

const db = require("./db");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/courses', async (req, res) => {
  const data = await db.collection('courses').get();
  const result = [];
  if(data.empty) {
    res.status(404).send('No course record found');
  }else {
    data.forEach(doc => {
      const course = {
        name:doc.data().name,
        price:doc.data().price,
        currency: doc.data().currency,
        description_short: doc.data().description_short,
        description_full: doc.data().description_full,
        duration: doc.data().duration,
        periodicity: doc.data().periodicity,
        groups: doc.data().groups,
        id: doc.id
      }
      result.push(course)
    })}

  res.json(result);
})


app.listen(PORT, () => console.log(`Server started at ${PORT}`));