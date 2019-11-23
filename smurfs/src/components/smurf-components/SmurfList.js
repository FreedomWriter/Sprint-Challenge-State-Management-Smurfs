import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../../redux/actions/get-actions";
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  // console.log(`SmurfList.js: props: `, props.smurfs);
  return (
    <div>
      <SmurfCard list={props.smurfs} />
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(`SmurfList.js: mapStateToProps: state: `, state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
