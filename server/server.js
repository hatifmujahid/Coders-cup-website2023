import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const uri = process.env.MONGOURI

const client = new MongoClient(uri);

async function run() {
    try {
      const database = client.db('coder');
      const participants = database.collection('participants');
      // Query for a movie that has the title 'Back to the Future'
      const query = { teamName: 'Cyber Rizzlers' };
      const participant = await participants.findOne(query);
      console.log(participant);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

