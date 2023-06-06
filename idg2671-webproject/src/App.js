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
import Logout from "./components/Logout/logout";
import AdminPage from "./pages/Admin";
import AdminAllBookings from "./pages/AdminAllBookings";
import AdminUsersOverview from "./pages/AdminUsersOverview";
import AdminToolsOverview from "./pages/AdminToolsOverview";
import MyAccount from "./pages/MyAccount";
import MyAccountUserInformation from "./pages/MyAccountUserInformation";
import MyAccountMyBookings from "./pages/MyAccountMyBookings";
import MyAccountRequestTools from "./pages/MyAccountRequestTools";
import PageNotFound from "./pages/404Page";
import AdminToolsOverviewSub from "./pages/AdminToolsOverviewSub";
import AdminUsersSub from "./pages/AdminUsersSub";

//import utils
import useRefreshToken from "./hooks/useRefreshtoken";
import PersistLogin from "./hooks/persistLogin";
import AuthContext from "./context/AuthProvider";

function App() {
  const { auth } = useContext(AuthContext);
  const refresh = useRefreshToken();
  if (!auth.accesstoken) refresh();

  // Set navbar desktop or mobile
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
          <Route path="/tools/:id/calendar" element={<BookingCalendarPage />} />
          <Route path="/tools/:id/calendar/booking" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/admin" element={<AdminPage />} >
            <Route path="/admin/allbookings" element={<AdminAllBookings />} />
            <Route path="/admin/usersoverview" element={<AdminUsersOverview />} >
              <Route path="/admin/usersoverview" element={<AdminUsersSub />} />
              <Route path="/admin/usersoverview/*" element={<AdminUsersSub />} />
            </Route>
            <Route path="/admin/toolsoverview" element={<AdminToolsOverview />} >
              <Route path="/admin/toolsoverview" element={<AdminToolsOverviewSub />} />
              <Route path="/admin/toolsoverview/*" element={<AdminToolsOverviewSub />} />
            </Route>
          </Route>
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