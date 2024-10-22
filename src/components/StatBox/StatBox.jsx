import React from 'react';
import DATA from '../../data/DATA.json';
import './StatBox.css';

const StatBox = ({ id }) => {
  // Ensure the ID is parsed as a string
  const character = DATA.find((c) => c.id === String(id));

  // Function to render the stat row based on the value
  const renderStatRow = (statValue) => {
    const filledBoxes = Array.from({ length: statValue }, (_, i) => (
      <div key={`filled-${i}`} className="filledBox"></div>
    ));
    const emptyBoxes = Array.from({ length: 5 - statValue }, (_, i) => (
      <div key={`empty-${i}`} className="emptyBox"></div>
    ));
    return [...filledBoxes, ...emptyBoxes];
  };

  // If character is not found, render empty stat boxes
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
    manipulation: 0, // Corrected case to match the expected key
    speed: 0,
    mobility: 0,
  };

  const stats = character ? character.stats : defaultStats;

  return (
    <div className="stateBox">
      {/* OFFENSIVE Section */}
      <section className="row">
        <div className="title">
          <img src="/icons/OFFENSIVE.svg" alt="Offensive Icon" className="stat-icon" />
          <span>OFFENSIVE</span>
        </div>
        <div>
          <div className="stateAtt">
            <span>DAMAGE</span>
            {renderStatRow(stats.damage)}
          </div>
          <div className="stateAtt">
            <span>RANGE</span>
            {renderStatRow(stats.range)}
          </div>
          <div className="stateAtt">
            <span>PRECISION</span>
            {renderStatRow(stats.precision)}
          </div>
        </div>
      </section>

      {/* DEFENSIVE Section */}
      <section className="row">
        <div className="title">
          <img src="/icons/DEFENSIVE.svg" alt="Defensive Icon" className="stat-icon" />
          <span>DEFENSIVE</span>
        </div>
        <div>
          <div className="stateAtt">
            <span>SURVIVABILITY</span>
            {renderStatRow(stats.survivability)}
          </div>
          <div className="stateAtt">
            <span>EVASION</span>
            {renderStatRow(stats.evasion)}
          </div>
          <div className="stateAtt">
            <span>ARMOR STRENGTH</span>
            {renderStatRow(stats.armorStrength)}
          </div>
        </div>
      </section>

      {/* MAGICAL AND MENTAL Section */}
      <section className="row">
        <div className="title">
          <img src="/icons/MAGICAL.svg" alt="Magical Icon" className="stat-icon" />
          <span>MAGICAL AND MENTAL</span>
        </div>
        <div>
          <div className="stateAtt">
            <span>INTELLIGENCE</span>
            {renderStatRow(stats.intelligence)}
          </div>
          <div className="stateAtt">
            <span>WILLPOWER</span>
            {renderStatRow(stats.willpower)}
          </div>
          <div className="stateAtt">
            <span>MAGIC POTENCY</span>
            {renderStatRow(stats.magicPotency)}
          </div>
          <div className="stateAtt">
            <span>HEALING</span>
            {renderStatRow(stats.healing)}
          </div>
        </div>
      </section>

      {/* TEAM PLAY Section */}
      <section className="row">
        <div className="title">
          <img src="/icons/TEAM.svg" alt="Team Play Icon" className="stat-icon" />
          <span>TEAM PLAY</span>
        </div>
        <div>
          <div className="stateAtt">
            <span>LEADERSHIP</span>
            {renderStatRow(stats.leadership)}
          </div>
          <div className="stateAtt">
            <span>CROWD CONTROL</span>
            {renderStatRow(stats.crowdControl)}
          </div>
          <div className="stateAtt">
            <span>CHARISMA</span>
            {renderStatRow(stats.charisma)}
          </div>
          <div className="stateAtt">
            <span>MANIPULATION</span>
            {renderStatRow(stats.manipulation)}
          </div>
        </div>
      </section>

      {/* AGILITY Section */}
      <section className="row">
        <div className="title">
          <img src="/icons/AGILITY.svg" alt="Agility Icon" className="stat-icon" />
          <span>AGILITY</span>
        </div>
        <div>
          <div className="stateAtt">
            <span>SPEED</span>
            {renderStatRow(stats.speed)}
          </div>
          <div className="stateAtt">
            <span>MOBILITY</span>
            {renderStatRow(stats.mobility)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatBox;
