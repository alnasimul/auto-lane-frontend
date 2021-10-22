import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {user, login} = useContext(AuthContext);

    if(user.error){
        setError(user.error);
    }

    useEffect(() => error && toast.error(error))
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(email && password){
          login(email, password)
        }
    }

    return (
        <Layout>
            <div className={styles.auth}>
                <h4 className='text-center text-2xl font-bold'> Log In </h4>
                <ToastContainer />
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                className='border border-gray-400'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                className='border border-gray-400'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Login" className="bg-black text-white rounded p-2 cursor-pointer mb-3" />
                    </form>
                    <hr />
                    <h4 className='text-center font-bold'>Or</h4>
                </div>
                <button className="bg-black w-full text-white rounded p-2 mb-2" onClick={googleSignIn}>Google Sign In</button>
                <p>
                    Dont have an account? <Link href='/account/register'>
                    <span className='hover:text-gray-500 cursor-pointer'>Register</span> 
                    </Link>
                </p>
            </div>
        </Layout>
    );
}

export default LoginPage;