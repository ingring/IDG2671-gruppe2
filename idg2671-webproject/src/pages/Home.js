import Button from '../components/Button/Button';

import Searchbar from '../components/Searchbar/Searchbar';
import ListTools from '../components/List/ListTools';

function HomePage() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen">
                <h1 className="pt-4">Dette er hjemmesiden!</h1>
                <Button title="Add tool" />

                <Searchbar />
                <ListTools />
            </div>
        </>
    );
}

export default HomePage;