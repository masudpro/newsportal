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
        console.log('comments url', detailUrl);
    }, []);
   
    return (
        <div>


             {
        courses.map(courses => 
                    
                  
            <img style={{width: '50px', height: '50px', borderRadius: '50px'} } className="w-100" src={courses.authorImage} alt=""/>
            )
             }
               
            {
                    comments.map( comments => 
                        <div className="comments">
                            <div className="commetsNameImg">
                                 <img className="commnetsImg" src="https://images.pexels.com/photos/3944426/pexels-photo-3944426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                 <h1>  {comments.name}</h1>

                                 <img  src={courses.authorImage} alt=""/>
                            </div>
                            
                            <div className="commetsBody">
                                 <p> {comments.body}</p>
                            </div>
                        </div>
                   
                    )
            }    



        </div>
    );
};

export default Comments;