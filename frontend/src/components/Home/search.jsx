import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const { tweet } = props;

  return (
    <React.Fragment>
      <Title>Your search</Title>
      {tweet ? (
        <div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Tweet</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tweet[0].map((t, index) => (
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