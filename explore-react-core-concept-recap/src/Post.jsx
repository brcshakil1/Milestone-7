const Post = ({post}) => {
    const {title, userId, body} = post;

    const postStyle = {
        border : '5px solid purple',
        borderRadius: '15px',
        padding: '15px',
        margin: '20px'
    }
    return (
        <div style={postStyle}>
            <h4>Title: {title}</h4>
            <p><small>User ID: {userId}</small></p>
            <p>Description: {body}</p>
        </div>
    );
};

export default Post;