import { NextResponse } from 'next/server';
import { handleCreateInquiry, handleListInquiries } from '@/backend/controllers/contactController';

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { status, data } = await handleCreateInquiry(body);
    return NextResponse.json(data, { status });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { status, data } = await handleListInquiries();
    return NextResponse.json(data, { status });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
