import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../title';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const apiEndpoint = 'http://127.0.0.1:5000/';

export default function TimeLine(props) {
  const classes = useStyles();
  const [followers, setFollowers] = useState();

  useEffect(() => {
    fetchFollowing();
  }, []);

  async function fetchFollowing() {
    await axios.get(apiEndpoint)
      .then(res => {
        setFollowers(res.data);
        console.log(res, 'are my followers')
        console.log(window.data)
      })
  }
  const tweet = '';

  return (
    <React.Fragment>
      <Title>Your TimeLine</Title>
      {tweet ? (
        <div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Tweet</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tweet.map((t, index) => (
                <TableRow key={index}>
                  <TableCell>{t}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Typography color="primary">
              See more tweets
          </Typography>
          </div>
        </div>
      ) : (
          <div className={classes.seeMore}>
            No tweets
      </div>
        )}
    </React.Fragment>
  );
}