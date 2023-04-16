import MyAccount from "../components/Form/MyAccount";
import ListMyBookings from '../components/List/ListMyBookings';

function MyAccountPage() {
    return (
        <div className="bg-grey-lighter min-h-screen p-20">
            <h1 className="md:text-3xl">My Account</h1>
            <div className="m-20">
                <MyAccount />
            </div>
            {/* Her er liste komponentet med dummy data som skal innunder my account, 
                dette må struktureres og styles mtp layoutet vi ønsker => subheader med to 
                'sider': personal information og my bookings */}
            <div className="m-20">
                <ListMyBookings />
            </div>
        </div>
    );
}

export default MyAccountPage;
