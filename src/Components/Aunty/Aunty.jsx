
import Cousin from '../Cousin/Cousin';
import '../Grandpa/Grandpa.css'
const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'ok'}></Cousin>
                <Cousin name={'not ok'}></Cousin>

            </section>
            
        </div>
    );
};

export default Aunty;