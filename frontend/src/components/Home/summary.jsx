import React from 'react';
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
      <Title>Response</Title>
      <Typography component="p" variant="h4">
        {(tweet) ? tweet.tweet : null}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date.toDateString()}
      </Typography>
    </React.Fragment>
  );
}