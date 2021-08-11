import './App.css';
import PizzaProvider from './context/pizzaContext/PizzaProvider';
import { Navbar } from './components/Navbar';
import { PizzaList } from './components/PizzaList';

function App() {
  return (
    <div className="App">
      <PizzaProvider>
        <Navbar />
        <main className= "container">
          <div className= "main-heading">
            <h2> Available Pizza </h2>
            <button>
            <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
          <PizzaList />
        </main>
      </PizzaProvider>
     
    </div>
  );
}

export default App;
