import Login from '../components/Form/Login'
import InputButton from '../components/Button/InputButton';

function LoginPage() {
    return (
        <div className="bg-grey-lighter min-h-screen">
            <div className='flex flex-col items-center justify-center p-20'>
            <h1 className="md:text-3xl pb-20">Sign in to book tools</h1>
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
