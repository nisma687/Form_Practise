import Special from "../Special/Special";
import "../Grandpa/Grandpa.css";


const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>

            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;