import { useState } from "react";
import Comment from "./Comment";
import { useEffect } from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);

    return (
        <div>
            <h3>Comments: {comments.length}</h3>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;