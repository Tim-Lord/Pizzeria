import './App.css';

import PizzaProvider from './context/pizzaContext/PizzaProvider';

function App() {
  return (
    <div className="App">
      <PizzaProvider>
        <h1> Hello World!</h1>
      </PizzaProvider>
     
    </div>
  );
}

export default App;
