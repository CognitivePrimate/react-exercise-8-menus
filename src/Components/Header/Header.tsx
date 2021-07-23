import { Link } from "react-router-dom";
import "./HeaderStyles.css";

import search from "../../Images/search.svg";

const Header = () => {


    return (
        <div className="Wrapper">
            <Link className="Header" to="/"><h1>Chonky Cats Cafe</h1></Link>
            <Link className="Header" to="/search">
                <div className="SearchBox">
                    <img src={search} alt="search"></img><p>search</p>        
                </div>
            </Link>
        </div>
        

    );
}

export default Header;