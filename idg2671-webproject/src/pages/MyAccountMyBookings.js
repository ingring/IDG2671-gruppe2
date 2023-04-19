import ListMyBookings from "../components/List/ListMyBookings";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountMyBookings() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <MyAccountSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-8">My bookings</h1>
        <p>Overview of your active and older bookings. </p>
        <div className="mt-20 w-3/5">
          <h2 className="text-xl mb-6">My bookings</h2>
          <ListMyBookings />
        </div>
      </div>
    </div>
  );
}

export default MyAccountMyBookings;
