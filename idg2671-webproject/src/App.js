// import modules
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

// import components
import Nav from "./components/Navbar/Nav";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Footer from "./components/Footer/Footer";

// Import pages
import HomePage from "./pages/Home";
import ToolsPage from "./pages/Tools";
import ToolPage from "./pages/Tool";
import BookingCalendarPage from "./pages/BookingCalendar";
import BookingPage from "./pages/Booking";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import AdminAllBookings from "./pages/AdminAllBookings";
import AdminUsersOverview from "./pages/AdminUsersOverview";
import AdminToolsOverview from "./pages/AdminToolsOverview";
import MyAccount from "./pages/MyAccount";
import MyAccountUserInformation from "./pages/MyAccountUserInformation";
import MyAccountMyBookings from "./pages/MyAccountMyBookings";
import MyAccountRequestTools from "./pages/MyAccountRequestTools";
import PageNotFound from "./pages/404Page";

//import utils
import useRefreshToken from "./hooks/useRefreshtoken";
import PersistLogin from "./hooks/persistLogin";
import AuthContext from "./context/AuthProvider";

function App() {
  const { auth } = useContext(AuthContext);
  const refresh = useRefreshToken();
  if (!auth.accesstoken) refresh();

  // Set navbar desktop or mobile
  const activePage = window.location.pathname;
  const [isMobile, setIsMobile] = useState(false);

  // UseEffect to the navbars, switch based on screen size.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // set the breakpoint for mobile devices
    };
    setIsMobile(false);
    handleResize();
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <NavbarMobile /> : <Nav />}
      {/* Routes */}
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:id" element={<ToolPage />} />
          {/* <Route path="/tools/id" element={<ToolPage />} /> */}
          <Route path="/tools/id/calendar" element={<BookingCalendarPage />} />
          <Route path="/tools/id/calendar/booking" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/allbookings" element={<AdminAllBookings />} />
          <Route path="/admin/usersoverview" element={<AdminUsersOverview />} />
          <Route path="/admin/toolsoverview" element={<AdminToolsOverview />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/myaccount/userinformation"
            element={<MyAccountUserInformation />}
          />
          <Route
            path="/myaccount/mybookings"
            element={<MyAccountMyBookings />}
          />
          <Route
            path="/myaccount/requesttools"
            element={<MyAccountRequestTools />}
          />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;

// Vi bruker bare 'App.js' til å legge inn routes. 'Home.js' vil være hjemmesiden.
// function App() {
//   return (
//     <div className="App">
//       {/* Should be changed to the navbar component, with links, instead of this ul list. */}
//       {/* Temporary styling, it must be changed to how it looks in Figma */}
//       <nav className="bg-blue-darker text-white flex flex-row h-14">
//         <ul className="flex flex-row justify-evenly w-screen items-center font-bold">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/tools">Tools</Link>
//           </li>
//           <li>
//             <Link to="/booking">Booking</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/admin">Admin</Link>
//           </li>
//           <li>
//             <Link to="/myaccount">My account</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/tools" element={<ToolsPage />} />
//         <Route path="/tools/id" element={<ToolPage />} />
//         <Route path="/booking" element={<BookingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/myaccount" element={<MyAccount />} />
//       </Routes>
//     </div>
//   );
// }
