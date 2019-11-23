import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../redux/actions/get-actions";
import { postSmurf } from "../redux/actions/post-actions";
import "./App.css";
import SmurfList from "./smurf-components/SmurfList";
import SmurfForm from "../components/smurf-components/SmurfForm";
const App = props => {
  // console.log(`App.js: props: `, props.smurfs);

  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <SmurfForm />
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(`App.js: mapStateToProps: state: `, state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, postSmurf })(App);
