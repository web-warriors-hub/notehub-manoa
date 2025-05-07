/* eslint-disable import/prefer-default-export */
// app/api/notes/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const notes = await prisma.note.findMany();

    return new NextResponse(JSON.stringify(notes), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error fetching notes:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch notes' }),
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    );
  }
}
