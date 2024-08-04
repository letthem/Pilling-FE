import React from "react";
import PillItem from "./PillItem";

const Negative = ({ pills, onDelete }) => {
  return (
    <div>
      {pills.map((pill) => (
        <PillItem
          key={pill.id}
          pillName={pill.name}
          bgColor="#D1D3D9"
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Negative;
