import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const ProductShow = (props) => {
    
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                console.log("response is this-->", res.data)
                setProductList(res.data.results);
            })
            .catch(err => {
                console.log("get all products error", err)
            })
    }, [props.formSubmitted])

    const deleteProduct = (idOfProduct) => {
        axios.delete(`http://localhost:8000/api/delete/${idOfProduct}`)
            .then(res => {
                console.log("res when deleting->", res)
                // setProductList(ProductList.filter(ProductObj => ProductObj._id != idOfProduct)); //this is the one liner way to remove from the dom
                let filteredList = productList.filter((ProductObj) => {
                    return ProductObj._id != idOfProduct //return back only the Products whose id is not the id of the Product we want to delete
                })
                setProductList(filteredList)
            })
            .catch(err => {
                console.log(err)
            })}

        return (
            <div>
                <hr />
                <h2>All Products</h2>
                {
                    productList.map((ProductObj) => {
                        return (
                            <div className="card" key={ProductObj._id}>
                                <div className="card-body d-flex justify-content-between align-items-around">
                                    <div className='word d-flex justify-content-between align-items-center gap-3'>
                                        <h5 className="card-title"><strong>{ProductObj.title}</strong></h5>
                                        <h6>Price: ${ProductObj.price}</h6>
                                    </div>
                                    <div className='botton a-flex'>
                                        <Link to={`/detail/${ProductObj._id}`} className='btn btn-primary m-3'>Detail</Link>
                                        <Link to={`/edit/${ProductObj._id}`} className='btn btn-warning m-3'>Edit</Link>
                                        <button onClick={() => { deleteProduct(ProductObj._id) }} className="btn btn-danger m-3">Delete</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    };
export default ProductShow;