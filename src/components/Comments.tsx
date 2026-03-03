import type { CommentType } from "../types/comment";

type Props ={
    commentsList : CommentType[]
}
const Comments = ({commentsList}:Props) => {

    return (
        <div className="border-t border-neutral-200 p-4 space-y-4">
            <h1 className="font-semibold">Comments</h1>

            {commentsList?.map((comment) => (
                <div key={comment?.id}>
                    <div className="flex items-center gap-4 text-sm text-neutral-400">
                        <h5>{comment?.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "-"}</h5>
                        <h5>{comment?.commenter}</h5>
                    </div>

                    <p className="text-sm sm:text-base">{comment?.comment}</p>
                </div>
            ))}

            {commentsList?.length === 0 &&
                <p className="text-neutral-400">No Comments</p>
            }
        </div>
    )
}

export default Comments;