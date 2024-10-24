import styles from "./MainContainer.module.css";
import StatBox from "../../../components/StatBox/StatBox";

const MainContainer = ({ children, hoveredCardId }) => {
  return (
    <div className={styles.flexStatContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.mainContainerContent}>{children}</div>
        <img
          src="/decoration/ContainderDeco.webp"
          alt=""
          className={styles.containerDeco}
        />
      </div>
      <div className={styles.statboxCollection}>
        <StatBox id={hoveredCardId || "0"} /> 
      </div>
    </div>
  );
};

export default MainContainer;
