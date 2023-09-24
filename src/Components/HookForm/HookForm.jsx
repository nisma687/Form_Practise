import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    const[name,handleNameChange] =useInputState('rojoni');
    const[email,handleEmailChange] =useInputState('nis@gmail.com');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted');
        console.log(name,email);
        
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input 
                value={name}
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <br />
                <input
                value={email}
                onChange={handleEmailChange}
                 type="email" name="email" />
                <br />
                <br />
                <input type="password" name="password" />
                <br />
                <br />
                <input type="submit" value="Submit"/>
              
            </form>
            
        </div>
    );
};

export default HookForm;