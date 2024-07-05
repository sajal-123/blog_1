import { CommentsTypeInterface, commentTypeInterface } from '../../Types'
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import CommentForm from './CommentForm';

interface AffectedComment {
    type?: string;
    _id?: string;
}

function Comment({ comment,
    LoggedInUserId,
    affectedComment,
    setAffectedComment,
    addComment,
    parentId = null,
    updateComment,
    deleteComment,
    replies
}: {
    comment: commentTypeInterface,
    LoggedInUserId: string,
    affectedComment: AffectedComment | null,
    setAffectedComment: (comment: AffectedComment | null) => void;
    addComment: (value: string, replyOnUser?: string, parent?: string) => void
    parentId?: string | null,
    updateComment: (value: string, comment_id: string) => void,
    deleteComment: (comment_id: string) => void,
    replies: CommentsTypeInterface;
}) {
    const isUserLoggined = Boolean(LoggedInUserId);
    const commentsBolongToUser = LoggedInUserId === comment.user._id;
    const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === comment._id;
    const isEditing = affectedComment && affectedComment.type === 'editing' && affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id

    return (
        <div className='p-3 rounded-lg bg-slate-100 flex flex-nowrap items-start gap-2 w-full'>
            <img src={comment.user.image} height={38} width={38} alt="atlUser" className=' rounded-full aspect-square object-cover' />
            <div className='flex flex-col flex-1'>
                <h5 className=' font-bold text-dark-hard text-xs md:text-sm'>{comment.user.name}</h5>
                <span className=' opacity-60 text-xs md:text-sm'>{new Date(comment.createdAt).toLocaleDateString("en-US", {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit'
                })}</span>
                {
                    !isEditing &&
                    <p className='font-openSans mt-[10px] text-dark-light'>{comment.desc}</p>
                }

                {
                    isEditing && <CommentForm btnLabel='Update' FormSubmitHandle={(value: string) => updateComment(value, comment._id)} FromCancelHandler={() => setAffectedComment(null)} initialText={comment.desc} />
                }
                <div className=' flex items-center space-x-3 text-dark-light font-Roboto text-sm mt-3 mb-3 '>
                    {
                        isUserLoggined && (
                            <button className='flex items-center space-x-1' onClick={() => setAffectedComment({ type: "replying", _id: comment._id })}>
                                <BiMessageDetail className='w-4 h-auto' /> <span>Reply</span>
                            </button>
                        )
                    }
                    {
                        commentsBolongToUser && (
                            <>
                                <button className='flex items-center space-x-1' onClick={() =>
                                    setAffectedComment({ type: "editing", _id: comment._id })
                                }>
                                    <MdOutlineEdit className='w-4 h-auto' /><span>Edit</span>
                                </button>
                                <button className='flex items-center space-x-1' onClick={() =>
                                    deleteComment(comment._id)}>
                                    <MdDeleteForever className='w-4 h-auto text-red-600' /> <span>Delete</span>
                                </button>
                            </>
                        )
                    }
                </div>
                {isReplying &&
                    <CommentForm btnLabel='Reply'
                        FormSubmitHandle={(value: string) => addComment(value, repliedCommentId, replyOnUserId)}
                        FromCancelHandler={() => setAffectedComment(null)}
                    />}
                {
                    replies.length > 0 && (
                        replies.map((reply) => (
                            <div className='md:pl-6' key={reply._id}>
                                <Comment
                                    key={reply._id}
                                    addComment={addComment}
                                    affectedComment={affectedComment}
                                    setAffectedComment={setAffectedComment}
                                    comment={reply}
                                    LoggedInUserId={LoggedInUserId}
                                    deleteComment={deleteComment}
                                    replies={[]}
                                    updateComment={updateComment}
                                    parentId={comment._id}
                                />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export { Comment }
