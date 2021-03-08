import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comment = () => {

const {id} = useParams();
const [post,setPost] = useState({});

const[comments,setComments] = useState({});

    useEffect(() => {

    const url =`https://jsonplaceholder.typicode.com/posts/${id}`

    fetch(url)

    .then(res=>res.json())

    .then(data =>setPost(data))

    },[id])

    useEffect(() => {
        const url= `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setComments(data))

    },[id])

    return (
        <div>
            <h4>post detail</h4>
            <p>user post id: {id}</p>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>number of comments{comments.length}</p>

            {
               comments.map(comment=><CommentDetail comment={comment}></CommentDetail>) 
            }
        </div>
    );
};

export default Comment;