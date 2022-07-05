import { MongoClient } from 'mongodb';
import credentials from "../../credentials.js";

// /api/new-meetup

async function handler(req, res) {
    const {password, username} = credentials();
    if(req.method === "POST"){
        console.log(req.body);
        // const data = JSON.parse(req.body);
        const data = req.body;

        const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.fjg9ckv.mongodb.net/meetups?retryWrites=true&w=majority`);
        const db = client.db('meetups');

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({message: 'Meeupt inserted'});
    }
}

export default handler;