import React from "react";
import PillItem from "./PillItem";

const Basic = ({ pills, onDelete }) => {
  return (
    <div>
      {pills.map((pill) => (
        <PillItem
          key={pill.name}
          pillName={pill.name}
          bgColor="#c4f261"
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Basic;
