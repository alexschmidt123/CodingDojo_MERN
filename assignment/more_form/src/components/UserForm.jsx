import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirm_password, setComfirm_Password] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, comfirm_password };
        console.log("Welcome", newUser);
    };

    return (
        <>

            <form onSubmit={createUser}>
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                    {
                        firstname.length < 2 && firstname.length > 0 ? <p className="text-danger">First name must be at least 2 characters</p> : null
                    }
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                    {
                        lastname.length < 2 && lastname.length > 0 ? <p className="text-danger">Last name must be at least 2 characters</p> : null
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    {
                        email.length < 2 && email.length > 0 ? <p className="text-danger">Email must be at least 2 characters</p> : null
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    {
                        password.length < 8 && password.length > 0 ? <p className="text-danger">Password must be at least 8 characters</p> : null
                    }
                </div>
                <div>
                    <label>Comfirm Password: </label>
                    <input type="text" onChange={(e) => setComfirm_Password(e.target.value)} />
                    {
                        comfirm_password != password ? <p className="text-danger">Password does not match</p> : null
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Comfirm Password: {comfirm_password}</p>
        </>

    );
};

export default UserForm;
