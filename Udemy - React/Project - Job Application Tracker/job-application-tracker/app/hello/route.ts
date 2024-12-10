import { NextResponse } from 'next/server';

// GET method handler
export async function GET() {
  return NextResponse.json({ message: 'Hello from GET!' });
}

// POST method handler
export async function POST(req: Request) {
  const body = await req.json();
  const { name } = body;

  return NextResponse.json({ message: `Hello, ${name}!` });
}