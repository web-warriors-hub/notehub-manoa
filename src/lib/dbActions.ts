'use server';

import { Note } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new note to the database.
 * @param note, an object with the following properties:
 * email, title, department, class, semester, professor, description, documentLink
 */
export async function addNote(note: {
  email: string;
  title: string;
  department: string;
  class: string;
  semester: string;
  professor: string;
  description: string;
  documentLink: string;
  owner: string;
}) {
  await prisma.note.create({
    data: {
      email: note.email,
      title: note.title,
      department: note.department,
      class: note.class,
      semester: note.semester,
      professor: note.professor,
      description: note.description,
      documentLink: note.documentLink,
      owner: note.owner,
    },
  });
  // After adding, redirect to the yourNote page
  redirect('/yourNote');
}

/**
 * Edits a new note to the database.
 * @param note, an object with the following properties:
 * email, title, department, class, semester, professor, description, documentLink
 */
export async function editNote(note: Note) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.note.update({
    where: { id: note.id },
    data: {
      email: note.email,
      title: note.title,
      department: note.department,
      class: note.class,
      semester: note.semester,
      professor: note.professor,
      description: note.description,
      documentLink: note.documentLink,
      owner: note.owner,
    },
  });
  // After updating, redirect to the yourNote page
  redirect('/yourNote');
}

/**
 * Deletes an existing Note from the database.
 * @param id, the id of the Note to delete.
 */
export async function deleteNote(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.note.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/yourNote');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  const existingUser = await prisma.user.findUnique({
    where: { email: credentials.email },
  });

  if (existingUser) {
    throw new Error('Email already exists');
  }
  const hashedPassword = await hash(credentials.password, 10);

  // Create the user
  await prisma.user.create({
    data: {
      email: credentials.email,
      password: hashedPassword,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}

// export async function addContact(contact: {
//   firstName: string;
//   lastName: string;
//   address: string;
//   image: string;
//   description: string;
//   owner: string;
// }) {
//   await prisma.contact.create({
//     data: {
//       firstName: contact.firstName,
//       lastName: contact.lastName,
//       image: contact.image, // Ensure this is a valid URL or path to an image
//       address: contact.address,
//       description: contact.description, // Optional, can be empty
//       owner: contact.owner, // The email of the user who owns this contact
//     },
//   });
//   redirect('/list'); // After adding, redirect to the list page
// }

// export async function editContact(contact: Contact) {
//   await prisma.contact.update({
//     where: { id: contact.id },
//     data: {
//       firstName: contact.firstName,
//       lastName: contact.lastName,
//       image: contact.image, // Ensure this is a valid URL or path to an image
//       address: contact.address,
//       description: contact.description, // Optional, can be empty
//       owner: contact.owner, // The email of the user who owns this contact
//     },
//   });
//   // After updating, redirect to the list page
//   redirect('/list');
// }
