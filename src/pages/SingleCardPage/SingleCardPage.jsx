import React from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../../data/DATA.json'; // Ensure the path is correct

const SingleCardPage = () => {
  const { cardId } = useParams(); // Retrieve the cardId from the route

  const card = DATA.find((c) => c.id === cardId); // Compare as strings

  // If card is not found, display a message
  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="single-card-page">
      <h1>{card.basicInfo.characterName}</h1>
      <img src={card.images.front} alt={card.basicInfo.characterName} />
      <img src={card.images.banner} alt={card.basicInfo.characterName} />
      <p>{card.basicInfo.description}</p>
    </div>
  );
};

export default SingleCardPage;
