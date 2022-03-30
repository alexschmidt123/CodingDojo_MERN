import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductShow from '../components/ProductShow';
import OneProductDetail from '../components/OneProductDetail';

const Main = () => {
    return (
        <div>
            <ProductForm/>
            <hr/>
            <ProductShow/>
        </div>
    )
}
export default Main;