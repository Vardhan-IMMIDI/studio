import { MongoClient, ServerApiVersion, type WithId, type Document } from 'mongodb';
import type { Farmer } from '@/lib/types';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
  clientPromise = client.connect();
}

const DB_NAME = "farmer_organization";
const COLLECTION_NAME = "members";

async function seedDatabase() {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    
    try {
        const count = await collection.countDocuments();
        if (count === 0) {
            console.log("Seeding database with sample members...");
            await collection.insertMany([
                {
                    memberId: 'FARMER001',
                    fullName: 'Bhavna Patel',
                    village: 'Anand, Gujarat',
                    memberSince: new Date('2021-03-15T00:00:00.000Z'),
                    profileImageUrl: 'https://picsum.photos/seed/farmer1/200/200',
                },
                {
                    memberId: 'FARMER002',
                    fullName: 'Rajesh Kumar',
                    village: 'Hoshiarpur, Punjab',
                    memberSince: new Date('2020-07-22T00:00:00.000Z'),
                    profileImageUrl: 'https://picsum.photos/seed/farmer2/200/200',
                }
            ]);
            console.log("Database seeded.");
        }
    } catch (e) {
        console.error("Failed to seed database. Please ensure MongoDB is running and accessible.", e);
    }
}


export async function getMemberById(id: string): Promise<WithId<Farmer> | null> {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection<Farmer>(COLLECTION_NAME);
    
    await seedDatabase();

    const member = await collection.findOne({ memberId: id });
    
    return member;
  } catch (e) {
    console.error('Database query failed:', e);
    throw new Error("Server error: Could not connect to the database.");
  }
}

export default clientPromise;
