import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles/styles';

import UsersList from '../Tabs/UsersList';
import UserProfile from '../Tabs/UserProfile';

import store from '../../store/store';
import fetchUsersData from './services';

const Body = (props) => {
  const { classes, users } = props;
  const [tab, setTab] = useState(0);
  const [userDetails, setUserDtails] = useState(null);
  const [loader, setLoader] = useState(true);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await fetchUsersData();
      store.dispatch({ type: 'SET_DATA', data: [...usersData] });
      setLoader(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const openDetailsTab = (id) => {
    const userDetails = users.find((user) => user.id === id);
    setUserDtails(userDetails);
    setTab(1);
  };

  return (
    <div>
      <Paper className={classes.Tabs}>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Users List' />
          <Tab disabled label='User Profile' />
        </Tabs>
      </Paper>

      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.TabsWrapper}
      >
        {loader ? (
          <CircularProgress className={classes.Loader} />
        ) : (
          <Grid className={classes.TabsItem} item xs={12}>
            {tab === 0 ? (
              <UsersList openDetails={openDetailsTab} users={users} />
            ) : (
              <UserProfile userDetails={userDetails} />
            )}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

Body.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(withStyles(styles)(Body));
