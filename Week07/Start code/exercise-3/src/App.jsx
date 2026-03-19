import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [result, setResult] = useState("")

  /* You will need some function to handle the key pressed and button events */
  const onA = (event)=>{
    setA(event.target.value);
  };
  const onB = (event)=>{
    setB(event.target.value);
  };
  const onCompute = ()=>{
    const numA = Number(A);
    const numB = Number(B);
    setResult(numA + numB);
  };
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label >A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result}/>
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
