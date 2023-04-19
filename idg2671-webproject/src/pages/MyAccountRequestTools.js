import RequestTool from "../components/Form/RequestTool";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountRequestTool() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <MyAccountSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-8">Request tool</h1>
        <p className="w-2/6 text-center">Do you have the need for a new tool at Verkstedet? Please leave an apply here.</p>
        <div className="mt-14 w-3/5">
          <RequestTool />
        </div>
      </div>
    </div>
  );
}

export default MyAccountRequestTool;
