import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../../redux/actions/post-actions";

const SmurfForm = props => {
  console.log(`SmurfForm.js: props: `, props);
  const [newSmurfName, setNewSmurfName] = useState("");
  const [newSmurfAge, setNewSmurfAge] = useState(null);
  const [newSmurfHeight, setNewSmurfHeight] = useState("");

  const changeNameHandler = e => {
    setNewSmurfName(e.target.value);
    console.log(newSmurfName);
  };

  const changeAgeHandler = e => {
    setNewSmurfAge(e.target.value);
  };

  const changeHeightHandler = e => {
    setNewSmurfHeight(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurf({
      name: newSmurfName,
      age: newSmurfAge,
      height: newSmurfHeight,
      id: Date.now()
    });
    setNewSmurfName("");
    setNewSmurfName(null);
    setNewSmurfHeight(``);
  };

  return (
    <div className="center">
      <form className="card" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeNameHandler}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={changeAgeHandler}
        />

        <input
          type="text"
          name="height"
          placeholder="Height"
          onChange={changeHeightHandler}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`SmurfForm.js: mapStateToProps: state: `, state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);
