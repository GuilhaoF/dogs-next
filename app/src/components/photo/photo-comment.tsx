'use client';

import React from 'react';
import { useUser } from '../../context/user-context';
import PhotoCommentsForm from './photo-comment-form';
import { CommentProps } from '../../types/commentType';


export default function PhotoComments(props: {
  single: boolean;
  id: number;
  comments: CommentProps[];
}) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <div className='border border-yellow-400 my-2 px-4 rounded-xl'>
      <ul
        ref={commentsSection}
        className={`overflow-y-auto break-words py-4 px-8 ${props.single ? 'p-0' : ''}`}
      >
        {comments.map((comment) => (
          <li className='mb-2 leading-6' key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {
        user ? (
          <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
        ) : <></>
      }
       <span>
        {JSON.stringify(user)}
       </span>
      
      
    </div>
  );
};


