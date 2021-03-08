import React from 'react';

const CommentDetail = (props) => {
    const {name,email} = props.comment;
    return (
        <div>
            <p>
                name: {name} email: {email}
            </p>
        </div>
    );
};

export default CommentDetail;