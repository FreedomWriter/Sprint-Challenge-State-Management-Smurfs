import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../../redux/actions/get-actions";

const SmurfList = props => {
  console.log(`SmurfList.js: props: `, props);
  return <div>Hello from smurfs</div>;
};

const mapStateToProps = state => {
  console.log(`SmurfList.js: mapStateToProps: state: `, state);
  return {
    smurfs: state
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
