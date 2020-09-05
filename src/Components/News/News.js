import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';






import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
     
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);










const News = () => {
    const classes = useStyles();
    const [newsDetails, setNewsDetails] = useState({});
    const {newsId} = useParams();
    const{ title, body } =newsDetails;
    useEffect(() =>{
        const detailUrl = `https://jsonplaceholder.typicode.com/posts/${newsId}`;
        fetch(detailUrl)
        .then(res => res.json())
        .then(data => setNewsDetails(data));
    }, []);

    return (


    <div className={classes.root}>
      <Grid  spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}> 
            <div className="singleNews">
                <h2>{title}</h2>
                <p>{body}</p>
                <h1>Comments</h1>
                <Comments></Comments>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>



        
    );
};

export default News;