// db.js
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'patientData';
const collectionName = 'patients';

let client;

async function connectToDB() {
  client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`Connected to MongoDB`);
}

async function getPatientData() {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const patientData = await collection.find().toArray();
  console.log(patientData); 
  return patientData;
}

async function updatePatientData(patientId, updates) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  await collection.updateOne({ _id: patientId }, { $set: updates });
}

module.exports = { connectToDB, getPatientData, updatePatientData };