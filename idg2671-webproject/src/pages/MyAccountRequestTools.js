import RequestTool from "../components/Form/RequestTool";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountRequestTool() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <MyAccountSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-28">Request tool</h1>
        <div className="">
          <RequestTool />
        </div>
      </div>
    </div>
  );
}

export default MyAccountRequestTool;
