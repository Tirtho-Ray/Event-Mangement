import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ShowCard = ({ card }) => {
    const { image, category, title, price, id } = card;
    const { user } = useContext(AuthContext);

    const detailsLink = user ? `/Details/${id}` : "/SignUp";

    return (
        <div>
            <div className="card bg-base-100 shadow-xl lg:w-[330px] w-[300px] h-[400px] mx-auto">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category}</h2>
                    <p>{title}</p>
                    <div className="">
                        <div>
                            <div>
                                <p>{price}</p>
                            </div>
                            <div>
                                <button className="py-2 px-3 md:py-2 md:px-4 rounded-lg bg-red-300 mt-3">
                                    <Link to={detailsLink}>Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;
