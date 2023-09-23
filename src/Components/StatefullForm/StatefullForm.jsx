import { useState } from "react";


const StatefullForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('nisma');
    const[error,setError]=useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(email,password,name);
        if(email.length>6){
            setError('password must be 6 character long');
        }
        else{
            setError('');
        }

        

    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                 type="text" name="name" 
                value={name} required />
                <br />
                <br />
                <input 
                    onChange={handleEmailChange}
                
                type="email" name="email" value={email} />
                <br />
                <br />
                <input
                    onChange={handlePasswordChange}
                 type="password" name="password" 
                 required
                 />
                <br />
                <br />
                <input 
                    onChange={handleNameChange}
                type="submit" value="Submit"/>
                {
                    error && <h3>{error}</h3>
                }
              
            </form>
            
        </div>
    );
};

export default StatefullForm;