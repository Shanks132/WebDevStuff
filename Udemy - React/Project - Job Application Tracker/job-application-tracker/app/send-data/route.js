import { NextResponse } from 'next/server';
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

// Helper function to set CORS headers
const setCorsHeaders = (response) => {
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Origin', '*'); // Specify origin if needed
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
};

// POST method handler
export async function POST(req) {
  const response = NextResponse.next();
  setCorsHeaders(response);

  try {
    // Parse the request body
    const { jobData } = await req.json();

    // Add the job data to Firebase Firestore
    const result = await addDoc(collection(db, 'applications'), jobData);

    console.log('Received job data:', jobData, "with id", result.id); // Log the received job data

    // Return a successful JSON response
    return NextResponse.json({ message: 'Data sent to Firebase successfully!' });
  } catch (error) {
    console.error('Error sending data to Firebase:', error);

    // Return an error response
    return NextResponse.json({
      message: 'Error sending data to Firebase!',
      error: error.message,
    }, { status: 500 });
  }
}

// OPTIONS method handler to handle preflight CORS requests
export async function OPTIONS() {
  const response = new Response(null, { status: 204 });
  return setCorsHeaders(response);
}

// GET method handler (if needed)
export async function GET(req) {
  const jsonResponse = NextResponse.json({ message: 'Sent Data to Firebase database!' });
  return setCorsHeaders(jsonResponse);
}
