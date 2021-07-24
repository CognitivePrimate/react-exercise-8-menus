import { ItemContext } from "../../Context/MenuContextProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Models/Item";

interface RouteParams {
    id: string;
}

const DetailsRoute = () => {
    const { items } = useContext(ItemContext)

    const { id } = useParams<RouteParams>();

    const foundItem: Item | undefined = items.find((item) => item.id === id);
    console.log(foundItem);

    return(
        <div className="ItemWrapper">
            <h2>Test</h2>
            <h4>{foundItem?.name}</h4>
            <p>{foundItem?.description}</p>
            <p>{foundItem?.calories}</p>
            <p>{foundItem?.price}</p>
            <p>{foundItem?.vegetarian}</p>
        </div>
    );

}



export default DetailsRoute;