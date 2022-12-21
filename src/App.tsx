import "./styles.css";
import { useState } from "react";

export default function App() {

  const [value,setValue] = useState(false)
  const handleClick = ()=>{
    setValue((value)=> !value)
  }
  return (
    <div className="App">
      <h1 onClick={handleClick}>Hello CodeSandbox</h1>
     { value &&<h2>Start editing to see some magic happen!</h2>
}
    </div>
  );
}
