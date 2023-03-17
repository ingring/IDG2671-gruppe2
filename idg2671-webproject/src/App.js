// Husk å importere componente ditt her
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// Importere pages
import ToolsPage from "./pages/Tools";
import ToolPage from "./pages/Tool";
import HomePage from "./pages/Home";
import BookingPage from "./pages/Booking";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import MyAccount from "./pages/MyAccount";

// Vi bruker bare 'App.js' til å legge inn routes. 'Home.js' vil være hjemmesiden.
function App() {
  return (
    <div className="App">
      {/* Should be changed to the navbar component, with links, instead of this ul list. */}
      {/* Temporary styling, it must be changed to how it looks in Figma */}
      <nav className="bg-blue-darker text-white flex flex-row h-14">
        <ul className="flex flex-row justify-evenly w-screen items-center font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/myaccount">My account</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/id" element={<ToolPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>

      <Footer />

    </div>
    
  );
}

export default App;
