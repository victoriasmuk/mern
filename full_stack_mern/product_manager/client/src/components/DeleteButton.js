import React from "react";
import axios from "axios";

export const DeleteButton = (props) => {
    const {productId, successCallback} = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <button className="btn btn-outline-danger" onClick={deleteProduct} >
            Delete
        </button>
    )
};