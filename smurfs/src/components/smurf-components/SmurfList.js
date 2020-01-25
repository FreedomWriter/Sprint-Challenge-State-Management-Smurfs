import React from "react";
import { useSelector } from "react-redux";
import SmurfCard from "../smurf-card/SmurfCard";

import { CardContainer } from "../smurf-card/SmurfCard.styles";

const SmurfList = () => {
  // console.log(`SmurfList.js: props: `, props.smurfs);
  const smurfs = useSelector(state => state.smurfs);
  return (
    <div className="card-container">
      <SmurfCard list={smurfs} />
    </div>
  );
};

export default SmurfList;
