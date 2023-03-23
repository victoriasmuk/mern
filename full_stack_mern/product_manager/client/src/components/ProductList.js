import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err));
    };
    return (
        <>
        <div className="w-25 mx-auto text-center">
            <h3>All Products:</h3>
            <div className="shadow mb-4 rounded border p-4">
            {props.products.map( (product, index) =>
                <div key={index}>
                    <Link to={'/products/'+product._id} className='card-title'>
                        {product.title}
                    </Link>
                    <div>
                        <button onClick={(e) => {deleteProduct(product._id)}} className='btn btn-outline-danger'>
                            Delete
                        </button>
                    </div>
                </div>
            )}
            </div>
        </div>
        </>
    );
};