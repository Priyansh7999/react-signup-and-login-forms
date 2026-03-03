import { useParams } from 'react-router-dom';
import { addComment, getTicketById } from '../api/ticket.api';
import { useEffect, useState } from 'react';
import type { TicketType } from '../types/ticket';
import TicketCard from '../components/TicketCard';
import toast from 'react-hot-toast';
import axios from 'axios';
import AddComment from '../components/AddComment';

export default function Ticket() {
    const { id } = useParams();
    const [ticket, setTicket] = useState<TicketType | null>(null);

    useEffect(() => {
        const fetchTicket = async () => {
            const data = await getTicketById(id);
            setTicket(data.data);
        };

        fetchTicket();
    }, [id]);

    const handleAddComment=async(values:{body:string}):Promise<void>=>{
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
    </div>
  )
}
