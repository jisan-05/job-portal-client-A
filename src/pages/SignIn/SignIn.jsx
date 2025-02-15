import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import signin from '../../assets/lottie/signin.json'

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signInUser(email,password)
        .then(result => {
            console.log("sign in user", result)
        })
        .catch(error => {
            console.log(error.message)
        })
       

    };

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left max-w-96 mx-auto">
                <Lottie animationData={signin} loop={true} />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold mt-4 ml-8">
                    Login Now
                </h1>
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Email"
                            />
                            <label className="fieldset-label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="input"
                                placeholder="Password"
                            />
                            <div>
                                <a className="link link-hover">
                                    Forgot password?
                                </a>
                            </div>
                            <button className="btn btn-neutral mt-4">
                                Login
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;