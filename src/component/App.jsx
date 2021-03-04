import react, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Enter your name" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
export default App;
