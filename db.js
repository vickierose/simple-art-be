
const admin = require("firebase-admin");

const serviceAccount = require("./firebaseAccountKey.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;