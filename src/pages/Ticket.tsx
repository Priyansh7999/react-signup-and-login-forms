import { useParams } from 'react-router-dom';
import { getTicketById } from '../api/ticket.api';
import { useEffect, useState } from 'react';
import type { TicketType } from '../types/ticket';
import useIsAllowed from '../hooks/useIsAllowed';
import TicketCard from '../components/TicketCard';

export default function Ticket() {
    const { id } = useParams();
    const [ticket, setTicket] = useState<TicketType | null>(null);
    const isAllowed = useIsAllowed();

    useEffect(() => {
        const fetchTicket = async () => {
            const data = await getTicketById(id);
            setTicket(data.data);
        };

        fetchTicket();
    }, [id]);
    
  return (
    <div>
      <TicketCard ticketDetails={ticket} />
    </div>
  )
}
