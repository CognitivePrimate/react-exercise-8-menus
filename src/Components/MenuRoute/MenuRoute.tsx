import { useContext } from "react";
import { ItemContext } from "../../Context/MenuContextProvider";
import BasicItem from "../BasicItem/BasicItem";



const MenuRoute = () => {
    const {items} = useContext(ItemContext);

    return(
        <div>
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