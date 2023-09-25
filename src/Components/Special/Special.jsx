import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift= useContext(AssetContext);

    return (
        <div>
            <h2>Special</h2>
            <h3>{gift}</h3>
            
        </div>
    );
};

export default Special;