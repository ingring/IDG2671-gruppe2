import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../axios/axios';

const logoutURL = 'api/logout';
let loggedOut = false

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      if(!loggedOut) {
        var confirmLogout = window.confirm('Are you sure you want to logout?');
        loggedOut = true
      }
      // Display an alert to confirm logout
      
      if (confirmLogout) {
        const response = await axiosPrivate.get(logoutURL);
        console.log(response.status);
        
        if (response.status === 200) {
          // Redirect to another page
          navigate('/Login');
          // Refresh the window to show that the user is logged out
          window.location.reload();
        }
      }
    };

    doLogout();
  }, [navigate]);

  return <div></div>;
}

export default Logout;
