// 'use client';

// import { Contact, Note } from '@prisma/client'; // Ensure you have the correct path to your prisma client
// import Link from 'next/link';
// import { Card, Image } from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';
// import NoteItem from '@/components/NoteItem';
// import AddNoteForm from './AddNoteForm';

// /* Renders a single contact. See list/page.tsx. */
// const ContactCard = ({ contact, notes }: { contact : Contact, notes: Note[] }) => (
//   <Card className="h-100">
//     <Card.Header>
//       <Image src={contact.image} width={75} />
//       <Card.Title>
//         {contact.firstName}
//             &nbsp;
//         {contact.lastName}
//       </Card.Title>
//       <Card.Subtitle>{contact.address}</Card.Subtitle>
//     </Card.Header>
//     <Card.Body>
//       <Card.Text>
//         {contact.description}
//         {' '}
//       </Card.Text>
//       <ListGroup variant="flush">
//         {notes.map((note) => <NoteItem key={note.id} note={note} />)}
//       </ListGroup>
//       {/* <AddNoteForm contact={contact} /> */}
//       <AddNoteForm />
//     </Card.Body>
//     <Card.Footer>
//       <Link href={`edit/${contact.id}`}>Edit</Link>
//     </Card.Footer>
//   </Card>
// );

// export default ContactCard;
