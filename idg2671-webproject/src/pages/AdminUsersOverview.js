import Subnav from "../components/Navbar/Subnav";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";

function AdminUsersOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <Subnav />
      <p>Her skal vi ha: list med alle brukerene, et form der du kan legge til/ endre bruker. </p>
      <h1 className="text-3xl p-20">Users overview</h1>
      <div className="flex flex-col items-center">
        <div className="w-2/4">
          <div className="mb-20">
            <CreateUser />
          </div>
          <div className="mb-32">
            <ListUsers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsersOverview;
