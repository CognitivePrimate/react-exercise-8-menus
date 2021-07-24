import Item from "../../Models/Item";

import "./BasicItemStyles.css";
import { Link } from "react-router-dom";

// icons
import toFavorite from "../../Images/to-favorite.svg";

interface Props {
    item: Item;
}

const BasicItem = ({item}: Props) => {
    // const {items} = useContext(ItemContext);

    return(
        <Link className="Link" to={`/DetailsRoute/${item.id}`}>
            <div className="ItemWrapper">
                <div className="Left">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                </div>
                <img src={toFavorite} alt="favorite"/>
            </div>
        </Link>
    );

}



export default BasicItem;