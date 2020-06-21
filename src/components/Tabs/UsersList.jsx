import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles/styles';

const UsersList = (props) => {
  const { classes, users, openDetails } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow hover>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({ id, first_name, last_name, avatar, email }) => (
            <TableRow
              onClick={() => openDetails(id)}
              hover
              key={id}
              className={classes.tableRow}
            >
              <TableCell component='th' scope='row'>
                {`${first_name} ${last_name}`}
              </TableCell>
              <TableCell align='right'>{email}</TableCell>
              <TableCell align='right'>
                <Avatar
                  color='primary'
                  alt='Git Avatar'
                  src={avatar}
                  className={classes.cardAvatar}
                ></Avatar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

UsersList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  openDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(UsersList);
