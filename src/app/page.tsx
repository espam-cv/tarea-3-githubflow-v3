"use client"

import React, { useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: any) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="calculator">
          <div className="display">
            <input type="text" value={input} readOnly />
            <div className="result">{result}</div>
          </div>
          <div className="buttons">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("/")}>/</button>

            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("*")}>*</button>

            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("-")}>-</button>

            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => handleButtonClick("+")}>+</button>

            <button onClick={handleClear} className="clear">
              C
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
