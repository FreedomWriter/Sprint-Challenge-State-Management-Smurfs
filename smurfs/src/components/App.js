import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../redux/actions/get-actions";
import "./App.css";
import SmurfList from "./smurf-components/SmurfList";
const App = props => {
  console.log(`App.js: props: `, props.smurfs[0]);

  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`App.js: mapStateToProps: state: `, state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
