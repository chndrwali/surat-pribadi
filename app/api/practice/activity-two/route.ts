import { prisma } from '@/lib/db';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const { activity_two } = body;
  const value = String(activity_two);

  // Validasi data
  if (!activity_two) {
    return NextResponse.json({ error: 'Properti name dan classes wajib diisi.' }, { status: 400 });
  }

  try {
    const createdExam = await prisma.activity_Two.create({
      data: {
        userId: currentUser.id,
        value,
      },
    });

    return NextResponse.json(createdExam, { status: 200 });
  } catch (error) {
    console.error('Error creating exam or styles:', error);
    return NextResponse.json(
      {
        error: 'Gagal menambahkan exam',
        details: error instanceof Error ? error.message : 'Terjadi kesalahan tidak terduga',
      },
      { status: 500 }
    );
  }
}
