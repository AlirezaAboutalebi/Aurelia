import { useNavigate } from 'react-router-dom';
import styles from './PacksContainer.module.css';
import packsData from '../../../../data/packsDATA.json';

const PacksContainer = () => {
  const navigate = useNavigate();
  const totalSlots = 8;

  const handlePackClick = (packId) => {
    navigate(`/packs/${packId}`);
  };

  return (
    <div className={styles.packsContainer}>
      <div className={styles.packsGrid}>
        {Array.from({ length: totalSlots }).map((_, index) => {
          const pack = packsData.packs[index];

          return pack ? (
            <div 
              key={pack.id || `pack-${index}`} 
              className={styles.packSlot}
              onClick={() => handlePackClick(pack.id)}
            >
              <img src={pack.image} alt={pack.packTitle} className={styles.packImage} />
            </div>
          ) : (
            <div key={`empty-pack-${index}`} className={`${styles.packSlot} ${styles.empty}`}>
              <span className={styles.emptyMessage}>No Pack Available</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PacksContainer;
