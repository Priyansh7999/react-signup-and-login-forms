import { useEffect, useState } from "react";
import { getAllTickets } from "../api/ticket.api";
import type { TicketType } from "../types/ticket";
import useIsAllowed from "../hooks/useIsAllowed";
import TicketActions from "../components/TicketActions";
import Table from "../components/Table";

const Tickets = () => {
    const [tickets, setTickets] = useState<TicketType[]>([]);
    const isAllowed = useIsAllowed();

    useEffect(() => {
        const fetchTickets = async () => {
            const data = await getAllTickets();
            setTickets(data.data);
        };
        fetchTickets();
    }, []);

    const columns = [
        {
            header: "Title",
            render: (ticket: TicketType) => ticket.title,
        },
        {
            header: "Description",
            render: (ticket: TicketType) => ticket.description,
        },
        {
            header: "Status",
            render: (ticket: TicketType) => ticket.status,
        },
        {
            header: isAllowed("VIEW_OWN_TICKETS") ? "Support Agent" : "Priority",
            render: (ticket: TicketType) => isAllowed("VIEW_OWN_TICKETS") ? ticket.agentName : ticket.priority,
        },
        {
            header: "Created At",
            render: (ticket: TicketType) => new Date(ticket?.createdAt!).toLocaleDateString()
        },
        {
            header: "Actions",
            render: (ticket: TicketType) => (<TicketActions ticketId={ticket.id} status={ticket.status} />
            ),
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-4 md:p-20">
            <h1 className="text-xl sm:text-2xl font-extrabold">Tickets</h1>
            <Table data={tickets} columns={columns}/>
        </div>
    );
};

export default Tickets;