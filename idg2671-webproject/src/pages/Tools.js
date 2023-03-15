import Card from '../components/Card/Card';
import Searchbar from '../components/Searchbar/Searchbar';

function ToolPage() {
    return (
      <>
        <div className="bg-grey-lighter min-h-screen">
          <Card />

          <Searchbar />
        </div>
      </>
    );
  }
  
 export default ToolPage;