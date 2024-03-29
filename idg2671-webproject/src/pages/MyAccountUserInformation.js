import MyAccount from "../components/MyAccount/MyAccount";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountUserInformation() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <div className="bg-blue-lighter flex flex-col items-center w-full">
        <div className="w-3/5 pt-16 pb-14 flex justify-left flex-col">
          <h1 className="text-3xl pb-8">My account</h1>
          <p className="pb-6 md:w-3/5">Here you can get an overview of your account with your credentials, as well as your previous and active bookings. You can also leave a request for new tools if needed.</p>
        </div>
      </div>
      <MyAccountSubnav />
      <div className="flex flex-col justify-center items-center py-28">
      <h2 className="text-xl md:text-2xl mb-10">Profile</h2>
          <MyAccount />
      </div>
    </div>
  );
}

export default MyAccountUserInformation;
