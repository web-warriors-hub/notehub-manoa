import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Note } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import DeleteNoteForm from '@/components/DeleteNoteForm';

export default async function DeleteNotePage({ params }: { params: { id: number } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  // console.log(id);
  const note: Note | null = await prisma.note.findUnique({
    where: { id },
  });
  // console.log(note);
  if (!note) {
    return notFound();
  }

  return (
    <main>
      <DeleteNoteForm note={note} />
    </main>
  );
}
