import { useContext } from 'react'; 
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AuthContext } from "../../context/AuthContext"; 

const Navigation = ({ className }) => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className={`${styles.navbar} ${className || ""}`}>
      <div className={styles.navbarLogo}>
        <img
          src="/icons/Logo.svg"
          className={styles.navbarLogoImg}
          alt="Logo"
        />
      </div>

      <div className={styles.navbarLinks}>
        <Link to="/" className={styles.navbarLink}>
          Home
        </Link>
        <div className={styles.navbarDivider}></div>
        <Link to="/card-collection" className={styles.navbarLink}>
          Card Collection
        </Link>
        <div className={styles.navbarDivider}></div>
        <Link to="/world-map" className={styles.navbarLink}>
          World Map
        </Link>
        <div className={styles.navbarDivider}></div>
        <Link to="/the-book" className={styles.navbarLink}>
          The Book
        </Link>
      </div>

      <div className={styles.navbarRight}>
        {user ? (
          <>
            <button className={styles.navbarLogoutButton} onClick={logOut}>
              Log Out
            </button>
            <span className={styles.navbarUser}>{user}</span>

            <img
              src="/icons/Knight.svg"
              className={styles.navbarIcon}
              alt="Knight Icon"
            />
          </>
        ) : (
          <Link
            to="/sign-in"
            className={`${styles.navbarLink} ${styles.navbarLinkSignin}`}
          >
            Sign In
            <img
              src="/icons/Knight.svg"
              className={styles.navbarIcon}
              alt="Knight Icon"
            />
          </Link>
        )}

        <button className={styles.navbarPlayButton}>Play Game</button>
      </div>
    </nav>
  );
};

export default Navigation;
