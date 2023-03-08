// Husk å importere componente ditt her
import './App.css';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

function App() {
  return (
    // Her legger du til componentene du har laget
    <div className="App">
      <Card />
      <Footer />
    </div>
  );
}

export default App;
