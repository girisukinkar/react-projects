import { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      {counter}
    </div>
  );
}

export default App;
