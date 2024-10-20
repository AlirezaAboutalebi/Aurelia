import './ChampionCardsContainer.css';
import ChampionCard from '../../../../components/ChampionCard/ChampionCard';

const ChampionCardsContainer = ({ visibleCards = [], flippedCards = [], handleFlip }) => {
  // Total slots to display
  const totalSlots = 18;

  return (
    <div className="champion-cards-container">
      <div className="cards-grid">
        {/* Render card slots */}
        {Array.from({ length: totalSlots }).map((_, index) => {
          const champion = visibleCards[index]; // Check if there's a card to render in the current slot

          return champion ? (
            <ChampionCard
              key={champion.id}
              champion={champion}
              flipped={flippedCards.includes(champion.id)}
              onFlip={handleFlip}
            />
          ) : (
            <div key={index} className="empty-card-slot">
              <span className="empty-message">No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
