import { ItemContext } from "../../Context/MenuContextProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Models/Item";

// images
import Home from "../../Images/home.svg";

// import css
import "./DetailsRouteStyles.css";

interface RouteParams {
    id: string;
}

const DetailsRoute = () => {
    console.log("in details route");
    const { items } = useContext(ItemContext)

    const { id } = useParams<RouteParams>();

    const foundItem: Item | undefined = items.find((item) => item.id === id);
    console.log(foundItem);

    return(
        <div className="DetailedItemWrapper">
            <h2 className="NameDetails">{foundItem?.name}</h2>
            <div className="Details">
                <p>{foundItem?.description}</p>
                <p>Calories: {foundItem?.calories}</p>
                <h4>${foundItem?.price}</h4>
                <p>Vegetarian: {foundItem?.vegetarian ? "Yes" : "No"}</p>
            </div>
            <img className="HomeIcon" src={Home} alt="home"/>
            
        </div>
    );

}



export default DetailsRoute;