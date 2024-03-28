import React, { useState } from "react";
import FieldButton from "./FieldButton";
import "./style.css";
const Calculator = () => {
  const [operation, setOperation] = useState("");

  const fields = [
    "AC",
    "DEL",
    "%",
    "=",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
  ];
  return (
    <section className="flex center">
      <div className="bg-primary p flex column calculator border-radius gap align-center">
        <h1 className="result-container p">{operation}</h1>
        <div className="flex gap justify-center">
          {fields.map((field, i) => (
            <FieldButton
              key={i}
              value={field}
              operation={operation}
              setOperation={setOperation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
