import React, { useState, useEffect } from 'react';
import './Home.css';
import { Button } from '@material-ui/core';
import { Link, useHistory,   } from 'react-router-dom';



import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 10,
     
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);



const Home = () => {
    const history = useHistory();
    const handleClick = (newsId) =>{
      const url = `/News/${newsId}`;
      history.push(url);
    }
    const classes = useStyles();
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNews(data))
        
    }, []);
   
    return (
      <div className="postBody">

      
           <div  className={classes.root}>
               <Grid container spacing={0}>
                    {
                        news.map( news => 
                            
                                <Grid item xs={4}>
                                    <Paper className={classes.paper} > 
                                      <div className="postItem">
                                            <h1>{news.title.slice(0, 30)}</h1>
                                            <p>{news.body.slice(0, 80)} ...</p>
                                            {/* <Link className="customButton" to={`/News/${news.id}`} variant="contained" color="primary">READ MORE</Link> */}

                                            <Button  onClick={ () => handleClick(news.id)} 
                                             variant="contained" color="primary">READ MORE</Button>

                                            
                                      </div>
                                    </Paper>
                                </Grid>
                            
                        )
                    }
                </Grid>  
            </div>
            </div>    
    );
};

export default Home;