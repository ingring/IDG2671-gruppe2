import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Searchbar from '../components/Searchbar/Searchbar';

function ToolPage() {
    return (
      <>
        <div className="bg-grey-lighter min-h-screen">
          <Card />

          <Searchbar />
        </div>
        <Footer />
      </>
    );
  }
  
 export default ToolPage;