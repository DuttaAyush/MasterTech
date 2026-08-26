import { createInquiry, getAllInquiries, getInquiryById } from '../models/ContactInquiry.js';

export async function handleCreateInquiry(body) {
  if (!body || typeof body !== 'object') {
    return { status: 400, data: { error: 'Invalid payload' } };
  }

  try {
    const inquiry = await createInquiry(body);
    return { status: 201, data: { ok: true, id: inquiry.id, createdAt: inquiry.createdAt } };
  } catch (err) {
    if (err.message.includes('Missing required fields')) {
      return { status: 400, data: { error: err.message } };
    }
    console.error('Error creating inquiry:', err);
    return { status: 500, data: { error: 'Internal server error while saving inquiry' } };
  }
}

export async function handleListInquiries() {
  try {
    const inquiries = await getAllInquiries();
    return { status: 200, data: { ok: true, inquiries } };
  } catch (err) {
    console.error('Error listing inquiries:', err);
    return { status: 500, data: { error: 'Internal server error while fetching inquiries' } };
  }
}
