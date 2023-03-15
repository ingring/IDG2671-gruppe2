import MyAccount from "../components/Form/MyAccount";
import Footer from "../components/Footer/Footer";

let jsonData = {
  name: "anosh",
  email: "anoshc@stud.ntnu.no",
  study: "web development",
  department: "ntnu",
};

function MyAccountPage() {
  return (
    <>
      <div className="bg-grey-lighter min-h-screen">
        <MyAccount
          name={jsonData["name"]}
          email={jsonData["email"]}
          study={jsonData["study"]}
          department={jsonData["department"]}
        />
      </div>
      <Footer />
    </>
  );
}

export default MyAccountPage;
