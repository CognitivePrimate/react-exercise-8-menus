import { ItemContext } from "../../Context/MenuContextProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Models/Item";

interface RouteParams {
    id: string;
}

const SearchRoute = () => {
    const { items } = useContext(ItemContext)

    const { id } = useParams<RouteParams>();

    const foundItem: Item | undefined = items.find((item) => item.id === id);

    return(
        <div className="ItemWrapper">
            <h2>Test</h2>
            <p>{foundItem?.name}</p>
        </div>
    );

}



export default SearchRoute;