import React, { useState, useContext } from "react";
import styles from './Authentication.module.css';
import Navigation from "../../components/Navigation/Navigation";
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Authentication = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn } = useContext(AuthContext); // Get the logIn function from context
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleSignUp = (e) => {
        e.preventDefault();
        // Simulate sign-up logic, e.g., backend API call
        logIn(name); // Log the user in with the given name
        navigate('/'); // Navigate to landing page after sign-up
    };

    const handleLogIn = (e) => {
        e.preventDefault();
        // Simulate log-in logic, e.g., backend API call
        logIn(name); // Log the user in with the given name
        navigate('/'); // Navigate to landing page after log-in
    };

    return (
        <>
            <div className="figure-overlay"></div>
            <Navigation />

            <div className={styles.authPage}>
                <img src="/images/signup/paper.webp" alt="Paper Background" className={`${styles.paper} ${styles.paper1}`} />
                <img src="/images/signup/paper.webp" alt="Paper Background" className={`${styles.paper} ${styles.paper2}`} />
                <img src="/images/signup/paper.webp" alt="Paper Background" className={`${styles.paper} ${styles.paper3}`} />

                <div className={styles.formContainer} style={{ backgroundImage: `url(${isSignUp ? '/images/signup/SignUp.webp' : '/images/signup/Login.webp'})` }}>
                    {isSignUp ? (
                        <div className={styles.signUpForm}>
                            <h1 className={styles.title}>Sign Up Champion</h1>
                            <form onSubmit={handleSignUp}>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="name">Declare your name:</label>
                                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                                </div>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="email">Scroll of Contact:</label>
                                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                                </div>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="password">Secret Word:</label>
                                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" id="terms" />
                                    <label htmlFor="terms">I Swear the Oath to Uphold the Privacy</label>
                                </div>
                                <button className={styles.button}>Enlist Champion</button>
                            </form>
                            <button className={styles.toggleButton} onClick={() => setIsSignUp(false)}>Log In</button>
                        </div>
                    ) : (
                        <div className={styles.logInForm}>
                            <h1 className={styles.title}>Log In to the Battlefield</h1>
                            <form onSubmit={handleLogIn}>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="loginName">State your name:</label>
                                    <input id="loginName" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                                </div>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="loginPassword">Speak your secret word:</label>
                                    <input id="loginPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                                </div>
                                <button className={styles.button}>Enter the Realm</button>
                            </form>
                            <button className={styles.toggleButton} onClick={() => setIsSignUp(true)}>Sign-Up</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Authentication;
