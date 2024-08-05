import React from "react";
import PillItem from "./PillItem";

const Positive = ({ pills, onDelete }) => {
  return (
    <div>
      {pills.map((pill) => (
        <PillItem
          key={pill.id}
          id={pill.id}
          pillName={pill.name}
          bgColor="#FDCCCC"
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Positive;
