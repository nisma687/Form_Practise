import Cousin from '../Cousin/Cousin';
import '../Grandpa/Grandpa.css'

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'jara'}></Cousin>
                <Cousin name={'mara'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;