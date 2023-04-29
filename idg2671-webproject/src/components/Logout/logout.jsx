import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../axios/axios';

const logoutURL = 'api/logout';

//logs out the user by sending a logout request to the backend which empties the cookie and deletes the refreshtoken in the database and if succesful redirects to login
function Logout() {
    console.log('testing from logout')
  const navigate = useNavigate();
  useEffect(() => {
    const doLogout = async () => {
      const response = await axiosPrivate.get(logoutURL);
      console.log(response.status);
      
      if (response.status === 200) {
        // Redirect to another page
        navigate('/Login');
        //refreshes the window to show that the user is logged out
        window.location.reload()
      }
    };
    doLogout();
  }, [navigate]);

  return <div></div>;
}

export default Logout;