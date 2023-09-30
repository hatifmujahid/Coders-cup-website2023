import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connectionString = process.env.MONGOURI || '';

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

let db = conn.db('coder');

export default db;

app.post('/submit', async (req, res) => {
    try {
        let collection = await db.collection('participants');
        let newDocument = req.body;
        newDocument.date = new Date();
        let result = await collection.insertOne(newDocument);
        res.send(result);
    } catch (e) {
        console.error(e);
    }
});

app.listen(5000, () => console.log('Server ready at http://localhost:5000'));
