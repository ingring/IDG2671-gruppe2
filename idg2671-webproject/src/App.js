// Husk å importere componente ditt her
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
// Importere pages
import Tools from './pages/Tools';
import Home from './pages/Home';
import Tool from './pages/Tool';

// Vi bruker bare 'App.js' til å legge inn routes. 'Home.js' vil være hjemmesiden.
function App() {
  return (
    <div className="App">

      {/* Should be changed to the navbar component, with links, instead of this ul list. */}
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tool" element={<Tool />} />
      </Routes>

    </div>
  );
}

export default App;
