import './App.css';
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="Thanks for hovering! I'm a tooltip">
        <p>Hover over me!</p>
      </Tooltip>
    </div>
  );
}

export default App;
