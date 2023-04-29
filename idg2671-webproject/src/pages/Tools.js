import Cards from '../components/Card/Cards';

import Searchbar from '../components/Searchbar/Searchbar';
import ListTools from '../components/List/ListTools';


function ToolPage() {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col items-center">
      <div className="bg-blue-lighter py-16 mb-20 flex flex-col items-center">
        <div className='w-3/5 flex justify-left flex-col'>
          <h1 className="text-3xl pb-8">Tools overview</h1>
          <p className="pb-6 md:w-3/5">There are many different tools at Verkstedet. Some tools are bookable, while the more small tools are not bookable and available at any time. Here you will find an overview of all the tools available at Verkstedet, both bookable and unbookable.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-28">
        <div className='flex flex-col md:flex-row md:flex-wrap w-3/5 md:justify-between items-center mb-12'>
        <Cards />
        </div>

        <div className="flex flex-col justify-center items-center w-3/4 md:w-2/5 items-center mb-10">
          <Searchbar />
          <ListTools />
        </div>

      </div>
    </div>
  );
}

export default ToolPage;