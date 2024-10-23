import React from 'react';
import DATA from '../../data/DATA.json';
import styles from './StatBox.module.css'; // Import the CSS module

const StatBox = ({ id }) => {
  const character = DATA.find((c) => c.id === String(id));

  const renderStatRow = (statValue) => {
    const filledBoxes = Array.from({ length: statValue }, (_, i) => (
      <div key={`filled-${i}`} className={styles.filledBox}></div>
    ));
    const emptyBoxes = Array.from({ length: 5 - statValue }, (_, i) => (
      <div key={`empty-${i}`} className={styles.emptyBox}></div>
    ));
    return [...filledBoxes, ...emptyBoxes];
  };

  const defaultStats = {
    damage: 0,
    range: 0,
    precision: 0,
    survivability: 0,
    evasion: 0,
    armorStrength: 0,
    intelligence: 0,
    willpower: 0,
    magicPotency: 0,
    healing: 0,
    leadership: 0,
    crowdControl: 0,
    charisma: 0,
    manipulation: 0,
    speed: 0,
    mobility: 0,
  };

  const stats = character ? character.stats : defaultStats;

  return (
    <div className={styles.stateBox}>
      <section className={styles.row}>
        <div className={styles.title}>
          <img src="/icons/OFFENSIVE.svg" alt="Offensive Icon" className={styles.statIcon} />
          <span>OFFENSIVE</span>
        </div>
        <div>
          <div className={styles.stateAtt}>
            <span>DAMAGE</span>
            {renderStatRow(stats.damage)}
          </div>
          <div className={styles.stateAtt}>
            <span>RANGE</span>
            {renderStatRow(stats.range)}
          </div>
          <div className={styles.stateAtt}>
            <span>PRECISION</span>
            {renderStatRow(stats.precision)}
          </div>
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.title}>
          <img src="/icons/DEFENSIVE.svg" alt="Defensive Icon" className={styles.statIcon} />
          <span>DEFENSIVE</span>
        </div>
        <div>
          <div className={styles.stateAtt}>
            <span>SURVIVABILITY</span>
            {renderStatRow(stats.survivability)}
          </div>
          <div className={styles.stateAtt}>
            <span>EVASION</span>
            {renderStatRow(stats.evasion)}
          </div>
          <div className={styles.stateAtt}>
            <span>ARMOR STRENGTH</span>
            {renderStatRow(stats.armorStrength)}
          </div>
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.title}>
          <img src="/icons/MAGICAL.svg" alt="Magical Icon" className={styles.statIcon} />
          <span>MAGICAL AND MENTAL</span>
        </div>
        <div>
          <div className={styles.stateAtt}>
            <span>INTELLIGENCE</span>
            {renderStatRow(stats.intelligence)}
          </div>
          <div className={styles.stateAtt}>
            <span>WILLPOWER</span>
            {renderStatRow(stats.willpower)}
          </div>
          <div className={styles.stateAtt}>
            <span>MAGIC POTENCY</span>
            {renderStatRow(stats.magicPotency)}
          </div>
          <div className={styles.stateAtt}>
            <span>HEALING</span>
            {renderStatRow(stats.healing)}
          </div>
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.title}>
          <img src="/icons/TEAM.svg" alt="Team Play Icon" className={styles.statIcon} />
          <span>TEAM PLAY</span>
        </div>
        <div>
          <div className={styles.stateAtt}>
            <span>LEADERSHIP</span>
            {renderStatRow(stats.leadership)}
          </div>
          <div className={styles.stateAtt}>
            <span>CROWD CONTROL</span>
            {renderStatRow(stats.crowdControl)}
          </div>
          <div className={styles.stateAtt}>
            <span>CHARISMA</span>
            {renderStatRow(stats.charisma)}
          </div>
          <div className={styles.stateAtt}>
            <span>MANIPULATION</span>
            {renderStatRow(stats.manipulation)}
          </div>
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.title}>
          <img src="/icons/AGILITY.svg" alt="Agility Icon" className={styles.statIcon} />
          <span>AGILITY</span>
        </div>
        <div>
          <div className={styles.stateAtt}>
            <span>SPEED</span>
            {renderStatRow(stats.speed)}
          </div>
          <div className={styles.stateAtt}>
            <span>MOBILITY</span>
            {renderStatRow(stats.mobility)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatBox;
