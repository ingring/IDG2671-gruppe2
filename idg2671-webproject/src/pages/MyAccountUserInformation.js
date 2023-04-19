import MyAccount from "../components/Form/MyAccount";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountUserInformation() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <MyAccountSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-8">User information</h1>
        <p>Overview of your account details.</p>
        <div className="my-20 w-2/6">
          <MyAccount />
        </div>
      </div>
    </div>
  );
}

export default MyAccountUserInformation;
