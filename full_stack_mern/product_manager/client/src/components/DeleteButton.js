import React from "react";
import axios from "axios";

export const DeleteButton = (props) => {
    const {product, setIsUpdatingProducts} = props;
    const deleteProduct = (idToDelete) => {
        axios.delete(`http://localhost:8000/api/products/delete/${idToDelete}`)
            .then((res) => {
                if(setIsUpdatingProducts !== undefined)
                    setIsUpdatingProducts(true)
                    console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <button className="btn btn-outline-danger" onClick={(event) => {
            deleteProduct(product._id);
        }}>
            Delete
        </button>
    )
};