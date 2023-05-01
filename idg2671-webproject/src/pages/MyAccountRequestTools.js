import RequestTool from "../components/Form/RequestTool";
import MyAccountSubnav from "../components/Navbar/MyAccountSubnav";

function MyAccountRequestTool() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <div className="bg-blue-lighter flex flex-col items-center w-full">
        <div className="w-3/5 pt-16 pb-14 flex justify-left flex-col">
          <h1 className="text-3xl pb-8">My account</h1>
          <p className="pb-6 md:w-3/5">Here you can get an overview of your account with your credentials, as well as your previous and active bookings. You can also leave a request for new tools if needed.</p>
        </div>
      </div>
      <MyAccountSubnav />
      <div className="py-28 flex flex-col items-center justify-center w-full">
        <div className=" w-fit w-3/4 md:w-1/5 px-6 md:px-0">
          <h2 className="text-xl md:text-2xl mb-16">Request new tool</h2>
          <RequestTool />
        </div>
      </div>
    </div>
  );
}

export default MyAccountRequestTool;
