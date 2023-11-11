import "./input.css";

const Input = ({ text, result }) => {
  return (
    <div className="input-wrapper">
      <div className="Result">
        <h1>{result}</h1>
      </div>
      <div className="Text">
        <h3> {text} </h3>
      </div>
    </div>
  );
};
export default Input;
