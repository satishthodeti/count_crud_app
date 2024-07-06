import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [emoji, setEmoji] = useState('👋');

  const handleAdd = () => {
    setCount(count + 1);
    setEmoji('😊');
  };

  const handleRemove = () => {
    setCount(count - 1);
    setEmoji('😒');
  };

  const handleReset = () => {
    setCount(0);
    setEmoji('😮');
  };

  return (
    <>
      <div>
        <header>
          <h1 className="emoji bg text">{emoji}</h1>
          <h1>My First Count React Task</h1>
        </header>
      </div>
      <div className="card">
        <h3>{count}</h3>
        <div className="button-container">
          <button className="button button-add" onClick={handleAdd}>
            Add ⬆️
          </button>
          <button className="button button-remove" onClick={handleRemove}>
            Remove ⬇️
          </button>
        </div>
        <button className="button button-reset" onClick={handleReset}>
          Reset 0️⃣
        </button>
      </div>
    </>
  );
}

export default App;
