import MyAccount from "../components/MyAccount/MyAccount";
import ListMyBookings from "../components/List/ListMyBookings";

function MyAccountPage() {
  return (
    <div className="flex flex-col items-center bg-grey-lighter min-h-screen p-20">
      <h1 className="md:text-3xl pb-32">My Account</h1>
      <div className="flex flex-row items-start justify-evenly w-full">
        <div className="">
          <MyAccount />
        </div>
        {/* Her er liste komponentet med dummy data som skal innunder my account, 
                dette må struktureres og styles mtp layoutet vi ønsker => subheader med to 
                'sider': personal information og my bookings */}
        <div className="w-2/4">
          <ListMyBookings />
        </div>
      </div>
    </div>
  );
}

export default MyAccountPage;
