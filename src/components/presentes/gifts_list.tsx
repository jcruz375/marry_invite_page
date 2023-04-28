import coffeAirportImg from "../../../public/assets/coffe_airport.png";
import dinnerImg from "../../../public/assets/dinner.png";
import souvenirImg from "../../../public/assets/souvenir.png";
import romanticWalkImg from "../../../public/assets/romantic_walk.png";
import dailyHotelImg from "../../../public/assets/daily_hotel.png";
import airPlaneImg from "../../../public/assets/airplane.png";
import GiftCard from "./gift_card";

const GiftsList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 mt-11 w-full">
      <GiftCard
        imagePath={coffeAirportImg}
        title="Café no aeroporto"
        price="R$ 50,00"
      />
      <GiftCard
        imagePath={souvenirImg}
        title="Lembrança da viagem"
        price="R$ 100,00"
      />
      <GiftCard
        imagePath={dinnerImg}
        title="Jantar romântico"
        price="R$ 200,00"
      />
      <GiftCard
        imagePath={romanticWalkImg}
        title="Passeio romântico"
        price="R$ 350,00"
      />
      <GiftCard
        imagePath={dailyHotelImg}
        title="Diária no hotel"
        price="R$ 500,00"
      />
      <GiftCard
        imagePath={airPlaneImg}
        title="Passagem aérea "
        price="R$ 700,00"
      />
    </div>
  );
}

export default GiftsList;