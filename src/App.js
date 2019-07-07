import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './navigation/navigation';
import './App.css';
import { routes } from './routes/routes';
import TopBar from "./components/topBar/topBar";

class App extends Component {

  render() {
    return (
      // <Navigation title={this.props.title}>
      //   {
      //     routes
      //   }
      // </Navigation>
      <TopBar />
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.sharedReducer.appBarTitle
  };
}

export default connect(mapStateToProps, null)(App);
