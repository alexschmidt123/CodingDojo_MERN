import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AuthorShow = (props) => {

    const [authorList, setAuthorList] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                console.log("response is this-->", res.data)
                setAuthorList(res.data.results);
            })
            .catch(err => {
                console.log("get all Authors error", err)
            })
    }, [props.formSubmitted])

    const deleteAuthor = (idOfAuthor) => {
        axios.delete(`http://localhost:8000/api/delete/${idOfAuthor}`)
            .then(res => {
                console.log("res when deleting->", res)
                // setAuthorList(AuthorList.filter(AuthorObj => AuthorObj._id != idOfAuthor)); //this is the one liner way to remove from the dom
                let filteredList = authorList.filter((AuthorObj) => {
                    return AuthorObj._id != idOfAuthor //return back only the Authors whose id is not the id of the Author we want to delete
                })
                setAuthorList(filteredList)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"><h4><strong>Authors</strong></h4></th>
                    <th scope="col"><h4><strong>Operations</strong></h4></th>
                </tr>
            </thead>
            <tbody>
                {authorList.map((AuthorObj) => {
                    return (
                        <tr>
                            <td className='col d-flex justify-content-between align-items-center gap-3'>
                                <h5 className="card-title"><strong>{AuthorObj.name}</strong></h5>
                            </td>
                            <td className='col a-flex justify-content-end'>
                                <Link to={`/edit/${AuthorObj._id}`} className='btn btn-primary'>Edit</Link>
                                <button onClick={() => { deleteAuthor(AuthorObj._id) }} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>



    );
};
export default AuthorShow;