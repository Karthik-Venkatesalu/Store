import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Styles } from './style';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ModuleIcon from '../assests/images/Med_Icon.svg';
import LogoIcon from '../assests/images/Logo.svg';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class Navigation extends Component {

  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, title } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {title}
          </Toolbar>
        </AppBar>
        <Drawer
          className={
            this.props.isUploadConfigurationOpen == true
            ? classes.uploadDialoguedrawer
            : classes.drawer
          }
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.drawerHeader} >
            <img src={LogoIcon} alt="Logo"></img>
          </div>

          <Divider />

          <List className={classes.list}>
            <ListItem
              button
              component={Link}
              to="/"
              selected={this.props.location.pathname === '/'}
              onClick={event => this.handleListItemClick(event, 0)}
              className={this.props.location.pathname === '/' ? classes.selectedMenuItem : classes.menuItem}
            >
              <ListItemIcon>
                <img src={ModuleIcon} alt="Module Configuration"></img>
              </ListItemIcon>
            </ListItem>
          </List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

const NavigationWrapped =  withStyles(Styles, { withTheme: true })(Navigation);
export default connect(null, null)(withRouter(NavigationWrapped));