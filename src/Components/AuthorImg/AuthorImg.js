import React, { useState } from 'react';
import CourseApi from '../CourseApi/CourseApi';


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




const randomChane = [...CourseApi];

const randomData = a => {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}





const AuthorImg = () => {
    const [courses, setCourse] = useState(randomChane);
    const classes = useStyles();
    return (
        <div>
            {
        courses.map(courses => 
            <Grid container spacing={3}>   
                <Grid item xs={3}>
                     <Paper className={classes.paper}>
                        <img style={{width: '50px', height: '50px', borderRadius: '50px'} } className="w-100" src={courses.authorImage} alt=""/>
                      </Paper>
              </Grid>
              </Grid>     
            
            )
                }

<Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
   
            
        </div>
    );
};

export default AuthorImg;