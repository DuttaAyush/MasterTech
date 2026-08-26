import { NextResponse } from 'next/server';
import { handleCreateInquiry, handleListInquiries } from '@/backend/controllers/contactController';
import { handleHealthCheck } from '@/backend/controllers/healthController';

const json = (data, init = {}) => NextResponse.json(data, init);

export async function GET(request, { params }) {
  const pathParts = (await params)?.path || [];
  const path = pathParts.join('/');

  try {
    if (path === '' || path === 'health') {
      const { status, data } = await handleHealthCheck();
      return json(data, { status });
    }
    if (path === 'contact') {
      const { status, data } = await handleListInquiries();
      return json(data, { status });
    }
    return json({ error: 'Endpoint not found' }, { status: 404 });
  } catch (err) {
    return json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  const pathParts = (await params)?.path || [];
  const path = pathParts.join('/');

  try {
    const body = await request.json().catch(() => ({}));

    if (path === 'contact') {
      const { status, data } = await handleCreateInquiry(body);
      return json(data, { status });
    }

    return json({ error: 'Endpoint not found' }, { status: 404 });
  } catch (err) {
    return json({ error: err.message }, { status: 500 });
  }
}
