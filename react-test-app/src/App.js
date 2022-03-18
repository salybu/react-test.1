import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minus-button"
            disabled={disabled}
            onClick={() => {
              setCounter((counter) => counter - 1);
            }}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={disabled}
            onClick={() => {
              setCounter(counter + 1);
              // setCounter((count) => count + 1)
            }}
          >
            +
          </button>
          <div>
            <button
              style={{ backgroundColor: "blue" }}
              data-testid="on/off-button"
              onClick={() => setDisabled((prev) => !prev)}
            >
              on/off
            </button>
          </div>
          q
        </div>
      </header>
    </div>
  );
}

export default App;
