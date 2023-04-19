import AdminSubnav from "../components/Navbar/AdminSubnav";
import Filter from "../components/Filter/Filter";
import ListBookedBy from "../components/List/ListBookedBy";

function AdminAllBookings() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <AdminSubnav />
      <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-3xl pb-8">All active bookings</h1>
        <p className="w-2/5 text-center">Here you have an overview of all active bookings at Verkstedet. You can also see who has booked the tool.</p>
        <div className="mt-20 w-3/4">
        <h2 className="text-2xl mb-6">Active bookings</h2>
          <Filter />
          <ListBookedBy />
        </div>
      </div>
    </div>
  );
}

export default AdminAllBookings;
