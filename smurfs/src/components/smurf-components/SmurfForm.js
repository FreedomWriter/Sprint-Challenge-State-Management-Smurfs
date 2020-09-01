import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSmurf } from "../../redux/actions/post-actions";

const SmurfForm = () => {
  const [newSmurfName, setNewSmurfName] = useState("");
  const [newSmurfAge, setNewSmurfAge] = useState(null);
  const [newSmurfHeight, setNewSmurfHeight] = useState("");

  const dispatch = useDispatch();

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
    dispatch(
      postSmurf({
        name: newSmurfName,
        age: newSmurfAge,
        height: `${newSmurfHeight}cm`,
        id: Date.now()
      })
    );
    setNewSmurfName("");
    setNewSmurfName(null);
    setNewSmurfHeight(``);
  };

  return (
    <div className="center">
      <form className="form-card" onSubmit={handleSubmit}>
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
        <button className="form-button">Submit!</button>
      </form>
    </div>
  );
};

export default SmurfForm;
