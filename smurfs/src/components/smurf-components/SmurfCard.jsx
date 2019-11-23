import React from "react";

const SmurfCard = props => {
  console.log(`SmurfCard.js: props: `, props.list);
  return (
    <div>
      Hi!
      {props.list.map(smurf => {
        console.log(smurf);
        return (
          <div key={smurf.id}>
            <p>{`I'm ${smurf.name}`}</p>
            <p>{`I'm ${smurf.age} years old, and ${smurf.height} tall!`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmurfCard;
