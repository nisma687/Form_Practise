import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    useEffect(()=>{

        nameRef.current.focus();
        
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);

    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef}
                 type="text" name="name" />
                <br />
                <br />
                <input
                ref={emailRef}
                defaultValue={'bd@gmail.com'}
                 type="email" name="email" required />
                <br />
                <br />
                <input
                ref={phoneRef}
                defaultValue={1234567890}
                 type="text" name="phone" />
                <br />
                <br />
                <input type="submit" value="Submit"/>
              
            </form>
            
        </div>
    );
};

export default RefForm;