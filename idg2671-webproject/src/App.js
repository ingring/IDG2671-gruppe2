// Husk å importere componente ditt her
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tools from './pages/Tools';

function App() {
  return (
    <div className="App">

      {/* Should be changed to the navbar component, with links, instead of this ul list. */}
      <nav>
        <ul>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/tools" element={<Tools />} />
      </Routes>

    </div>
  );
}

export default App;
