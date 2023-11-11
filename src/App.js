import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

import { useState } from "react";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const clearItem = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input result={result} text={text} />
        <div className="Row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color="red" handleClick={addToText} />
        </div>
        <div className="Row">
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} color="red" />
        </div>
        <div className="Row">
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} color="red" />
        </div>
        <div className="Row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" handleClick={addToText} color="red" />
        </div>
        <Button symbol="Clear" color="orange" handleClick={clearItem} />
      </div>
    </div>
  );
};

export default App;
