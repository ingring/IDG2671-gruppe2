import MyAccount from "../components/Form/MyAccount";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountUserInformation() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <MyAccountSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-28">User information</h1>
        <div className="">
          <MyAccount />
        </div>
      </div>
    </div>
  );
}

export default MyAccountUserInformation;
