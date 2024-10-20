import React from 'react';
import { useParams } from 'react-router-dom';
import packsData from '../../data/packsDATA.json';

const SinglePackPage = () => {
  const { packId } = useParams();
  const pack = packsData.packs.find((p) => p.id === parseInt(packId));

  if (!pack) {
    return <div>Pack not found</div>;
  }

  return (
    <div className="single-pack-page">
      <h1>{pack.packTitle}</h1>
      <img src={pack.image} alt={pack.packTitle} />
      <p>{pack.packDescription1}</p>
      <p>{pack.packDescription2}</p>
      <p>{pack.packDescription3}</p>
    </div>
  );
};

export default SinglePackPage;
