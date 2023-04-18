import Subnav from "../components/Navbar/Subnav";
import Filter from "../components/Filter/Filter";
import ListBookedBy from "../components/List/ListBookedBy";

function AdminAllBookings() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <Subnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-32">All bookings</h1>
        <div className="">
          <Filter />
          <ListBookedBy />
        </div>
      </div>
    </div>
  );
}

export default AdminAllBookings;
