import AdminSubnav from "../components/Navbar/AdminSubnav";
import Filter from "../components/Filter/Filter";
import ListBookedBy from "../components/List/ListBookedBy";

function AdminAllBookings() {
  return (
    <>
      <div className="mt-24 flex flex-col items-center justify-center w-full">
      <h2 className="text-xl md:text-2xl mb-14">Bookings overview</h2>
        <div className="mb-24 w-fit md:w-3/6">
          <h2 className="text-xl md:text-2xl mb-6">Active bookings</h2>
          <Filter />
          <ListBookedBy />
        </div>
      </div>
    </>
  );
}

export default AdminAllBookings;
