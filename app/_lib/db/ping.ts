import { MongoClient } from "mongodb"

const URI = process.env.MONGODB_URI!

export async function ping() {

    if (!URI) {
        throw new Error("Please add your MongoDB URI to the .env file")
      }

    const client = new MongoClient(URI)

    try {
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (err) {
        if(err instanceof Error)
            console.log("ERROR", err.stack);
    }

    finally {
        await client.close();
    }

}