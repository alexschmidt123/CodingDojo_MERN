import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const SearchForm = () => {
    let [categories, setCategories] = useState([]);
    let [selectCategories, setSelectCategories] = useState([]);
    let [id, setId] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(response =>{
            console.log("respond------>", response)
            console.log(Object.keys(response.data))
            setCategories(Object.keys(response.data))
            
        })
        .catch(error =>{
            console.log("error abort-->", error)
        })
    },[])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")
        history.push(`/${selectCategories}/${id}`)
    }
    return (
        <div>
            <form onSubmit = {handleFormSubmit} className='d-flex justify-content-around'>
                <div className="form-group d-flex justify-content-between gap-2">
                    <label htmlFor=""><strong>Search For:</strong></label>
                    <select onChange = {(e)=>{setSelectCategories(e.target.value)}} className="form-select" name="" id="">
                        {
                            categories.map((category,i) => {
                                return (
                                    <option value={category} key={i}>{category}</option>
                                )
                            })
                        }
                        
                    </select>
                </div>
                <div className="form-group d-flex justify-content-between gap-2">
                    <label htmlFor=""><strong>ID:</strong></label>
                    <input onChange = {(e)=>{setId(e.target.value)}} type="number" name='' id='' className='form-control'/>
                </div>
                <input type="submit" value="Search!" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default SearchForm;