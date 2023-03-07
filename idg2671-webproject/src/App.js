// Husk å importere componente ditt her
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    // Her legger du til componentene du har laget
    <div className="App">
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
