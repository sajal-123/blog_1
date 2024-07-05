import { CommentsTypeInterface } from "../Types";

const comments: CommentsTypeInterface = [
      {
        "_id": "10",
        "user": {
          "_id": "a",
          "name": "Mohammad Rezaii",
          "image": "https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        },
        "desc": "It was a nice post, Thank you!",
        "post": "1",
        "parent": null,
        "replyOnUser": null,
        "createdAt": "2022-12-31T17:22:05.092+0000"
      },
      {
        "_id": "11",
        "user": {
          "_id": "b",
          "name": "Paul M. Williams",
          "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        },
        "desc": "A reply for Mohammad",
        "post": "1",
        "parent": "10",
        "replyOnUser": "a",
        "createdAt": "2022-12-31T17:22:05.092+0000"
      },
      {
        "_id": "12",
        "user": {
          "_id": "b",
          "name": "Paul M. Williams",
          "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "desc": "Keep it up bro <3",
        "post": "1",
        "parent": null,
        "replyOnUser": null,
        "createdAt": "2022-12-31T17:22:05.092+0000"
      },
      {
        "_id": "13",
        "user": {
          "_id": "c",
          "name": "Jessica C. Stephens",
          "image": "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "desc": "I'm always interested in your content :)",
        "post": "1",
        "parent": null,
        "replyOnUser": null,
        "createdAt": "2022-12-31T17:22:05.092+0000"
      },
      {
        "_id": "14",
        "user": {
          "_id": "d",
          "name": "John D. Harris",
          "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "desc": "Great post!",
        "post": "1",
        "parent": null,
        "replyOnUser": null,
        "createdAt": "2022-12-31T17:22:05.092+0000"
      },
      {
        "_id": "15",
        "user": {
          "_id": "e",
          "name": "Linda S. Martinez",
          "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "desc": "Thanks for sharing!",
        "post": "1",
        "parent": "14",
        "replyOnUser": "d",
        "createdAt": "2022-12-31T17:22:05.092+0000"
      },
];



const getCommentData = async () => {
    return comments;
}

export { getCommentData }

