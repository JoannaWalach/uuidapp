import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> UUID GENERATOR</h2>
      {uuidv4()};
    </div>
  );
}

export default App;

