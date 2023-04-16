import Login from '../components/Form/Login'

function LoginPage() {
    return (
        <div className="bg-grey-lighter min-h-screen p-20">
            <h1 className="md:text-3xl pb-20">Sign in to book tools</h1>
            <div className='flex justify-center'>
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
