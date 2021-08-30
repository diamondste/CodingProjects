import React , {useState} from 'react';

const Forms = (props) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfrimpass] = useState("");

    const createUser = (e) => {

        e.preventDefault();
    
    const newUser = {firstname, lastname, email, password, confirmpass};
    console.log('Hello', newUser )
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfrimpass("");
    };



    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstname} onChange={ (e) =>
                setFirstname(e.target.value) }/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastname} onChange={ (e) =>
                setLastname(e.target.value) }/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={ (e) =>
                setEmail(e.target.value) }/>

            </div>
            <div>
                <label>Password:</label>
                <input type="text" value={password} onChange={ (e) =>
                setPassword(e.target.value) }/>
        
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" value={confirmpass} onChange={ (e) =>
                setConfrimpass(e.target.value) }/>

            </div>
            <div>
                <h6>Your Form Data</h6>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpass}</p>

            </div>
        </form>

    );

};


export default Forms;

