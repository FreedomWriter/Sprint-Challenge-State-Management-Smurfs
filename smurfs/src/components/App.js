import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getSmurfs } from "../redux/actions/get-actions";
import "./App.css";
import SmurfList from "./smurf-components/SmurfList";
import SmurfForm from "../components/smurf-components/SmurfForm";

const App = () => {
  // console.log(`App.js: props: `, props.smurfs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSmurfs());
  }, []);
  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
