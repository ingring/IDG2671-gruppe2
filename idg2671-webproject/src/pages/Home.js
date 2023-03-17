import Button from '../components/Button/Button';

function HomePage() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen">
                <h1 className="pt-4">Dette er hjemmesiden!</h1>
                <Button title="Add tool" />
            </div>
        </>
    );
}

export default HomePage;