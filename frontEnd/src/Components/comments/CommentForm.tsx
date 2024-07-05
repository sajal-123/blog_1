import React, { useState } from 'react';

interface CommentFormProps {
    btnLabel: string;
    FormSubmitHandle: (value: string, parent?: string | null, replyOnUser?: string | null, comment_id?: string | null) => void;
    FromCancelHandler?: () => void;
    initialText?: string
}

const CommentForm: React.FC<CommentFormProps> = ({ btnLabel, FormSubmitHandle, FromCancelHandler = null, initialText = "" }) => {
    const [comment, setComment] = useState(initialText);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        FormSubmitHandle(comment);
        setComment('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="p-4 flex flex-col items-end border border-primary rounded-lg">
                <textarea
                    className="w-full focus:outline-none font-medium bg-transparent"
                    rows={5}
                    id="comment_id"
                    placeholder="Leave Your Comment Here..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div className='flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row'>
                    {
                        FromCancelHandler && (
                            <button type="submit" onClick={FromCancelHandler} className="rounded-lg px-4 py-2.5 border-2 border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white duration-500">
                                Cancel
                            </button>
                        )
                    }
                    <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary
         text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed hover:bg-blue-800 duration-300">
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;
