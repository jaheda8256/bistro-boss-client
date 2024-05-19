import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Card from "./Card";

const FoodCard = () => {


    const [cards , setCards] = useState([]);

    useEffect(() =>{
        fetch('card.json')
        .then(res => res.json())
        .then(data =>  setCards(data))
    },[])
  return (
    <div className="my-16">
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    cards.map(card => <Card
                    key={card._id}
                    card={card}
                    ></Card>)
                }
            </div>
    </div>
  );
};

export default FoodCard;
