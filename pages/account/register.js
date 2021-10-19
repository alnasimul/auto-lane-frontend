import Layout from "@/components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/AuthForm.module.css";
import Link from "next/link";
import { useState } from "react";
const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const handleSubmit = () => {

    }
    return (
        <Layout>
            <div className={styles.auth}>
                <h4 className='text-center text-2xl font-bold'> Register </h4>
                <ToastContainer />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">User Name</label>
                            <input
                                type="text"
                                id="name"
                                value={username}
                                className='border border-gray-400'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
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
                        <div>
                            <label htmlFor="passwordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                id="passwordConfirm"
                                value={passwordConfirm}
                                className='border border-gray-400'
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Register" className="bg-black text-white rounded p-2 cursor-pointer mb-2" />
                    </form>
                 <p>
                    Already have an account? <Link href='/account/login'>
                       <span className='hover:text-gray-500 cursor-pointer'>Login</span> 
                    </Link>
                </p>
            </div>
        </Layout>
    );
}

export default RegisterPage;