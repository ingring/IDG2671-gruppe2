import Subnav from "../components/Navbar/Subnav";
import Filter from "../components/Filter/Filter";
import ListBookedBy from "../components/List/ListBookedBy";

function AdminAllBookings() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <Subnav />
      <p>Her skal vi ha: list with all bookings</p>
      <h1 className="text-3xl p-20">All bookings</h1>
      <div className="flex flex-col items-center">
        <div className="w-2/4">
          <Filter />
          <ListBookedBy />
        </div>
      </div>
    </div>
  );
}

export default AdminAllBookings;
