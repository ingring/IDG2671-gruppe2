import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

function HomePage() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen">
                <h1 className="pt-4">Dette er hjemmesiden!</h1>
                <Button title="Add tool" />
            </div>
            
            <Footer />
        </>
    );
}

export default HomePage;