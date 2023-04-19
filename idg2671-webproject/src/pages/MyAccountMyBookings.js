import ListMyBookings from "../components/List/ListMyBookings";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountMyBookings() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <MyAccountSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-28">My bookings</h1>
        <div className="">
          <ListMyBookings />
        </div>
      </div>
    </div>
  );
}

export default MyAccountMyBookings;
