import MyAccount from "../components/Form/MyAccount";
import ListMyBookings from '../components/List/ListMyBookings';

function MyAccountPage() {
    return (
        <>
            <div className="">
                <h1 className="pt-4">Dette er min side pagen!</h1>
                <MyAccount />

                {/* Her er liste komponentet med dummy data som skal innunder my account, 
                dette må struktureres og styles mtp layoutet vi ønsker => subheader med to 
                'sider': personal information og my bookings */}
                <ListMyBookings />
            </div>
        </>
    );
}

export default MyAccountPage;
