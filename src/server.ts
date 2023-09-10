// src/server.ts
import express from 'express';
import cors from 'cors';
import tripRoutes from './routes/trip';
import authRoutes from './routes/auth';

const { MongoClient } = require('mongodb');

const app = express();

app.use(cors());
app.use(express.json());

// Trip routes
app.use('/api/trips', tripRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log(`Server is up and running`);
});


const client = new MongoClient('mongodb://127.0.0.1:27017');
async function main() {
await client.connect();
const db = client.db('test');
const collection = db.collection('users');
return 'done.';
}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());











