import type { TicketType } from "../types/ticket";
import useIsAllowed from "../hooks/useIsAllowed";

type Props={
    ticketDetails:TicketType | null
}

const TicketCard = ({ticketDetails}:Props) => {
    const isAllowed = useIsAllowed();

    return (
        <div className="w-full flex justify-center px-4">
            <div className="w-full border border-neutral-200 p-6 rounded-2xl space-y-2">
                <h2><span className="font-semibold">Title: </span>{ticketDetails?.title}</h2>
                <h2><span className="font-semibold">Description: </span>{ticketDetails?.description}</h2>
                <h2><span className="font-semibold">Status: </span>{ticketDetails?.status}</h2>
                <h2>
                    {isAllowed("VIEW_OWN_TICKETS") && 
                    <>
                        <span className="font-semibold">Support Agent: </span>{ticketDetails?.agentName}
                    </>
                    }
                    {isAllowed("VIEW_ASSIGNED_TICKETS") && 
                    <>
                        <span className="font-semibold">Priority: </span>{ticketDetails?.priority}
                    </>
                    }
                </h2>
                <h2><span className="font-semibold">Created On: </span>{ticketDetails?.createdAt ? new Date(ticketDetails.createdAt).toLocaleDateString() : "-"}</h2>
            </div>
        </div>
    )
}

export default TicketCard;