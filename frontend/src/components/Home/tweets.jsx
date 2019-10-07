import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';
import { Typography } from '@material-ui/core';

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Tweets(props) {
  const classes = useStyles();
  const { tweet } = props;

  console.log(tweet);
  return (
    <React.Fragment>
      <Title>Recent Tweets</Title>
      {tweet ? (
        <div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>User</TableCell>
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