import { useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
import { ItemContext } from "../../Context/MenuContextProvider";
import BasicItem from "../BasicItem/BasicItem";

// styles
import "./MenuRouteStyles.css";



const MenuRoute = () => {
    const {items} = useContext(ItemContext);

    return(
        <div className="MenuWrapper">
            {items.map((item, index) => 
                    <BasicItem 
                        key={`${item.name}-${index}`}
                        item={item}
                    />   
            )}
        </div>    
        
    );

}


export default MenuRoute;