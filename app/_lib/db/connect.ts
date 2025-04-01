import { MongoClient } from "mongodb"

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}
const URI = process.env.MONGODB_URI!
const DB = process.env.MONGODB_DB!
const options = {}
client = new MongoClient(URI, options)

if (!URI) {
  throw new Error("Please add your MongoDB URI to the .env file")
}

try {

  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the MongoClient instance is not recreated.
    if (!global._mongoClientPromise) {
      client = new MongoClient(URI, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    clientPromise = client.connect()
  }

} catch (error) {
  if (error instanceof Error)
    console.log("ERROR", error.stack);
}
finally {
  await client.close();
  console.log("CLOSE")
}

async function getDatabase() {
  const client = await clientPromise
  return client.db(DB)
}

export async function getCollection(collectionName: string) {
  const db = await getDatabase()
  return db.collection(collectionName)
}

export default getDatabase