const { MongoClient,ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'demo';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('std');
    data = await collection.find({"_id":ObjectId("61795edf37d0c256e5e8658a")}).toArray()
  console.log(data)
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());