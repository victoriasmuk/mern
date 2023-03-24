import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DeleteButton } from "./DeleteButton";

export const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    };
    
    return (
        <>
        <div className="w-25 mx-auto text-center">
            <h3>All Products:</h3>
            <div className="shadow mb-5 rounded border p-4">
            {products.map( (product, index) =>
                <div key={index}>
                    <Link to={'/products/'+product._id} className='card-title'>
                        {product.title}
                    </Link>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link to={'/products/edit/'+ product._id} className='btn btn-outline-success' >Edit</Link>
                        <DeleteButton productId={product._id} successfulCallback={()=>removeFromDom(product._id)} />
                    </div>
                </div>
            )}
            </div>
        </div>
        </>
    );
};