import  { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [card, setCard] = useState(null); 
  const { id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards.find((card) => card.id == id);
    console.log(findCard);
    
    if (findCard) {
      // If a card is found, update the state with it
      setCard(findCard);
    } else {
      // Handle the case where no card is found with the given ID
      setCard(null);
    }
  }, [id, cards]);

  return (
    <div>
      {card ? (
        <div>
         <div className="card card-compact mt-4 w-full px-4 bg-base-100 shadow-xl">
            <figure><img src={card.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{card.category}</h2>
                <p>{card.bio}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{card.price}</button>
                </div>
            </div>
            </div>
         
        </div>
      ) : (
        <p>No card found </p>
      )}
    </div>
  );
};

export default Details;
