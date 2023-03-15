import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Searchbar from '../components/Searchbar/Searchbar';
import Filter from '../components/Filter/Filter'

function ToolPage() {
    return (
      <>
        <div className="bg-grey-lighter min-h-screen">
          <Card />

          <Searchbar />
          <Filter />
        </div>
        <Footer />
      </>
    );
  }
  
 export default ToolPage;