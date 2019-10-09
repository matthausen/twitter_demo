import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Summary(props) {
  const classes = useStyles();
  const { tweet } = props;

  const date = new Date();


  return (
    <React.Fragment>
      <Title>Sentiment Analysis</Title>
      <Typography component="p" variant="h6">
        {(tweet) ? (
          <div>
            <p>{Math.round(parseInt(tweet[1][1]) * 100) / 100}% positive tweets</p>
            <p>{Math.round(parseInt(tweet[1][0]) * 100) / 100}% negative tweets</p>
          </div>
        ) : null}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date.toDateString()}
      </Typography>
    </React.Fragment>
  );
}