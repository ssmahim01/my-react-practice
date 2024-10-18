import './Comment.css';

const Comment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div className='card'>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Description: {body}</p>
        </div>
    );
};

export default Comment;