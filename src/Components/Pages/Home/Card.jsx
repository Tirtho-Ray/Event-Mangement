import ShowCard from "./ShowCard";


const Card = ({cards}) => {

    return (
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
         {
            cards?.map((card)=><ShowCard key={card.id} card={card}></ShowCard>)
         }
        </div>
    );
};

export default Card;