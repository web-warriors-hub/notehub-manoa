import { PrismaClient, Role, Condition } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    const role = account.role as Role || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
    // console.log(`  Created user: ${user.email} with role: ${user.role}`);
  });
  config.defaultNotes.forEach(async (note, index) => {
    console.log('Adding Note');
    await prisma.note.upsert({
      where: { id: index },
      update: {},
      create: {
        email: note.email,
        title: note.title,
        department: note.department,
        class: note.class,
        semester: note.semester,
        professor: note.professor,
        description: note.description,
        documentLink: note.documentLink,
      },
    });
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
