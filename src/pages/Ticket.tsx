import { useParams } from 'react-router-dom';
import { addComment, getCommentsByTicketId, getTicketById } from '../api/ticket.api';
import { useEffect, useState } from 'react';
import type { TicketType } from '../types/ticket';
import TicketCard from '../components/TicketCard';
import toast from 'react-hot-toast';
import axios from 'axios';
import AddComment from '../components/AddComment';
import type { CommentType } from '../types/comment';
import Comments from '../components/Comments';

export default function Ticket() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);


  useEffect(() => {
    const fetchTicket = async () => {
      const data = await getTicketById(id);
      setTicket(data.data);
    };

    fetchTicket();
  }, [id]);
  useEffect(() => {
    const fetchComment = async () => {
      const data = await getCommentsByTicketId(id);
      setComments(data.data);
    };

    fetchComment();
  }, [id]);

  const handleAddComment = async (values: { body: string }): Promise<void> => {
    try {
      const data = await addComment(id, values.body);
      if (data.success) {
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
      <AddComment handleAddComment={handleAddComment} />
      <Comments commentsList={comments} />
    </div>
  )
}
