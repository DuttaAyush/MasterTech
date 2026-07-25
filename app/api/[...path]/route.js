import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

let cachedClient = null;
async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGO_URL);
    await cachedClient.connect();
  }
  const dbName = process.env.DB_NAME || 'mimag';
  return cachedClient.db(dbName);
}

const json = (data, init = {}) => NextResponse.json(data, init);

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/');
  try {
    if (path === '' || path === 'health') {
      return json({ status: 'ok', service: 'MIMAG Technologies API', time: new Date().toISOString() });
    }
    return json({ error: 'Not found' }, { status: 404 });
  } catch (err) {
    return json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/');
  try {
    const body = await request.json().catch(() => ({}));

    if (path === 'contact') {
      const { name, email, message } = body || {};
      if (!name || !email || !message) {
        return json({ error: 'Missing required fields' }, { status: 400 });
      }
      const db = await getDb();
      const doc = {
        id: uuidv4(),
        name,
        email,
        company: body.company || '',
        role: body.role || '',
        interest: body.interest || '',
        message,
        createdAt: new Date().toISOString(),
      };
      await db.collection('contact_inquiries').insertOne(doc);
      return json({ ok: true, id: doc.id });
    }

    return json({ error: 'Not found' }, { status: 404 });
  } catch (err) {
    return json({ error: err.message }, { status: 500 });
  }
}
