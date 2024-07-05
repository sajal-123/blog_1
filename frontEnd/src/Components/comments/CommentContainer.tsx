import { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentData } from '../../data/Commentsdata'
import { CommentsTypeInterface } from '../../Types';
import { Comment } from './Comment';

function CommentContainer({ className, LoggedInUserId }: { className: string, LoggedInUserId: string }) {

    const [comments, setComments] = useState<CommentsTypeInterface>([]);
    const mainComments = comments.filter((comment) => comment.parent === null);
    const [affectedComment, setAffectedComment] = useState<{ type?: string; _id?: string } | null>(null);


    useEffect(() => {
        (async () => {
            const commentdata = await getCommentData();
            setComments(commentdata);
        })()
    }, [])


    const deleteCommentHandler = (comment_id: string) => {
        const deletedComment = comments.filter((comment) => comment._id !== comment_id)
        setComments(deletedComment)
        setAffectedComment(null)
    }
    const updateCommentHandler = (value: string, comment_id: string) => {
        const updateComment = comments.map((comment) => {
            if (comment._id === comment_id) {
                return { ...comment, desc: value }
            }
            return comment;
        })
        setComments(updateComment)
        setAffectedComment(null)
    }

    const addCommentHandler = (value: string, replyOnUser?: string | null, parent?: string | null) => {
        const newComment = {
            _id: Math.random().toString(),
            user: {
                _id: "u2",
                name: "Jane Smith",
                image: ''
            },
            desc: value,
            post: "p1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: new Date().toISOString()
        }
        console.log(value)
        console.log(comments)
        setComments((currentState) => [newComment, ...currentState]);
        console.log(comments)
        setAffectedComment(null)
    }

    const replyHandler = (Comment_id: string) => {
        return comments.filter((comment) => comment.parent === Comment_id)
            .sort((a, b) => {
                return (
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                )
            })
    }


    return (
        <>
            <div className={`${className}`}>
                <CommentForm btnLabel='Comment' FormSubmitHandle={(value: string) => addCommentHandler(value)} />
                <div className=' space-y-4 mt-8'>
                    <h1>total comment {mainComments.length}</h1>
                    {
                        mainComments.map((comment, index) => {
                            return (
                                <Comment key={comment._id}
                                    comment={comment}
                                    LoggedInUserId={LoggedInUserId}
                                    affectedComment={affectedComment}
                                    setAffectedComment={setAffectedComment}
                                    addComment={addCommentHandler}
                                    updateComment={updateCommentHandler}
                                    deleteComment={deleteCommentHandler}
                                    replies={replyHandler(comment._id)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CommentContainer
