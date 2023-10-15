import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Slider from "./Slider";


const Home = () => {
    const cards = useLoaderData();
    
    return (
        <div className="App p-4">
        <h1 className="text-xl  md:text-3xl font-bold mb-5 text-center">Capturing Memorable Moments in Your Social Gatherings</h1>
        <Slider />
       <Card cards={cards}></Card>
      </div>
    );
};

export default Home;