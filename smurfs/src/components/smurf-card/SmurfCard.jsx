import React from "react";

const SmurfCard = ({ list }) => {
  console.log(`SmurfCard.js: list: `, list);
  return (
    <div>
      {list.map(smurf => {
        console.log(smurf);
        return (
          <div key={smurf.id} className="card">
            <p>Hi!</p>
            <p>{`I'm ${smurf.name}`}</p>
            <p>{`I'm ${smurf.age} years old, and ${smurf.height} tall!`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmurfCard;
