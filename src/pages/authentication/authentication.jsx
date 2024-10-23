import React, { useState } from "react";
import styles from './Authentication.module.css';
import Navigation from "../../components/Navigation/Navigation";

const Authentication = () => {
    const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign-Up and Log-In

    return (
        <>
            <div className="figure-overlay"></div>
            <Navigation />

            <div className={styles.authPage}>
                {/* Layered Paper Backgrounds */}
                <img src="/images/signup/paper.webp" alt="Paper Background" className={`${styles.paper} ${styles.paper1}`} />
                <img src="/images/signup/paper.webp" alt="Paper Background" className={`${styles.paper} ${styles.paper2}`} />
                <img src="/images/signup/paper.webp" alt="Paper Background" className={`${styles.paper} ${styles.paper3}`} />

                {/* Top Paper with the form */}
                <div className={styles.formContainer} style={{ backgroundImage: `url(${isSignUp ? '/images/signup/SignUp.webp' : '/images/signup/Login.webp'})` }}>
                    {isSignUp ? (
                        <div className={styles.signUpForm}>
                            <h1 className={styles.title}>Sign Up Champion</h1>
                            <form>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="name">Declare your name:</label>
                                    <input id="name" type="text" placeholder="Enter your name" />
                                </div>

                                <div className={styles.fieldContainer}>
                                    <label htmlFor="email">Scroll of Contact:</label>
                                    <input id="email" type="email" placeholder="Enter your email" />
                                </div>

                                <div className={styles.fieldContainer}>
                                    <label htmlFor="password">Secret Word:</label>
                                    <input id="password" type="password" placeholder="Enter your password" />
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
                            <form>
                                <div className={styles.fieldContainer}>
                                    <label htmlFor="loginName">State your name:</label>
                                    <input id="loginName" type="text" placeholder="Enter your name" />
                                </div>

                                <div className={styles.fieldContainer}>
                                    <label htmlFor="loginPassword">Speak your secret word:</label>
                                    <input id="loginPassword" type="password" placeholder="Enter your password" />
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
