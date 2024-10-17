import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import MainContainer from "./MainContainer/MainContainer";

const CardCollection = () => {
  return (
    <>
    <div className="figure-overlay"></div>
      <Navigation/>
      <MainContainer/>
      <ChampionCardsContainer/>
    </>
  );
};

export default CardCollection;
