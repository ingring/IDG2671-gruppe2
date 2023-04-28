import NotFoundPage from "../components/404Page/NotFoundPage";

function PageNotFound() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="md:text-3xl pb-20">404 - Page Not Found</h1>
        <NotFoundPage />
      </div>
    </div>
  );
}

export default PageNotFound;
