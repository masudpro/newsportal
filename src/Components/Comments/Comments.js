import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseApi from '../CourseApi/CourseApi';
import './Commnets.css'
   

const randomChane = [...CourseApi];
    const randomData = a => {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }
    randomData(randomChane);

const Comments = () => {
    const [courses, setCourse] = useState(randomChane);
    const [comments, setComments] = useState([]);
    const {newsId} = useParams();
    useEffect(() => {
        const detailUrl = `https://jsonplaceholder.typicode.com/comments?postId=${newsId}`;
        fetch(detailUrl)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
   
    return (
        <div>

            {
                comments.map( (comments, i ) =>
                    <div className="comments">
                        <div className="commetsImg">
                            <img class="authorImg" src={courses[i].authorImage} alt=""/>
                            
                        </div>
                        <div className="commetsBody">
                        <h1> {comments.name}. <span>By:</span> <small> {comments.email}</small> </h1>
                            <p> {comments.body}</p>
                        </div>
                    </div>
                    )
            }

            

        </div>
    );
};

export default Comments;