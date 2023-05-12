import { useState } from "react";
import "./App.css";
import IntroductionBlock from "./Sections/IntroductionBlock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IntroductionBlock />
      
      <div className="projects">
        <h2>Projects:</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked me {count} times.
        </button>
      </div>
    </>
  );
}

export default App;
