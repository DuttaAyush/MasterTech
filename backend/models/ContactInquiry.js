import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../db.js';

const COLLECTION_NAME = 'contact_inquiries';

export async function createInquiry(data) {
  const { name, email, company = '', role = '', interest = '', message = '' } = data;

  if (!name || !email || !message) {
    throw new Error('Missing required fields: name, email, and message are mandatory');
  }

  const db = await getDb();
  const inquiry = {
    id: uuidv4(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: company.trim(),
    role: role.trim(),
    interest: interest.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  await db.collection(COLLECTION_NAME).insertOne(inquiry);
  return inquiry;
}

export async function getAllInquiries(limit = 100) {
  const db = await getDb();
  return await db
    .collection(COLLECTION_NAME)
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();
}

export async function getInquiryById(id) {
  const db = await getDb();
  return await db.collection(COLLECTION_NAME).findOne({ id });
}
