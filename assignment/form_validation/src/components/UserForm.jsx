import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirm_password, setComfirm_Password] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email};
        console.log("Welcome", newUser);
    };
    
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
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
                <input type="submit" value="Submit" />
            </form>

            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
        </>

    );
};

export default UserForm;
