import { useParams } from 'react-router-dom';
import { addComment, getCommentsByTicketId, getTicketById } from '../api/ticket.api';
import React, { useEffect, useState } from 'react';
import type { TicketType } from '../types/ticket';
import TicketCard from '../components/TicketCard';
import toast from 'react-hot-toast';
import axios from 'axios';
import type { CommentType } from '../types/comment';
import Comments from '../components/Comments';
import AddCommentForm from '../components/AddCommentForm';

export default function Ticket() : React.JSX.Element {
  const { id } = useParams();
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);


  const fetchTicket = async () : Promise<void> => {
      const data = await getTicketById(id);
      setTicket(data.data);
  };
  const fetchComment = async () : Promise<void> => {
      const data = await getCommentsByTicketId(id);
      setComments(data.data);
  };
  useEffect(() => {
    fetchTicket();
    fetchComment();
  }, [id]);

  const handleAddComment = async (values: { body: string }): Promise<void> => {
    try {
      const data = await addComment(id, values.body);
      if (data.success) {
        fetchComment()
        toast.success(data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
    }
  }

  return (
    <div>
      <TicketCard ticketDetails={ticket} />
      <AddCommentForm handleAddComment={handleAddComment} />
      <Comments commentsList={[...comments].reverse()} />
    </div>
  )
}
