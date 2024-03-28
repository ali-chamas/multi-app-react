import React from "react";

const FieldButton = ({ value, setOperation, operation }) => {
  const pressButton = () => {
    switch (value) {
      case "=":
        setOperation(`${eval(operation)}`);
        break;
      case "AC":
        setOperation("");

        break;
      case "DEL":
        setOperation((o) => o.slice(0, -1));
        break;
      default:
        setOperation((o) => o + value);
    }
  };
  return (
    <div className="field" onClick={pressButton}>
      {value}
    </div>
  );
};

export default FieldButton;
