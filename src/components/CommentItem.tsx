'use client';

import { Comment } from '@prisma/client';

import ListGroup from 'react-bootstrap/ListGroup';

/* Renders a single Note. See components/ContactCard.tsx. */
const CommentItem = ({ comment }: { comment : Comment }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{comment.createdAt.toLocaleDateString('en-US')}</p>
    <p>{comment.comment}</p>
  </ListGroup.Item>
);

export default CommentItem;
