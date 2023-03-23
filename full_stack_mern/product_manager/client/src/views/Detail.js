import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";

export const Detail = (props) => {

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-75 mx-auto text-center">
            <p>Title: {product.title} </p>
            <p>Price: ${product.price} </p>
            <p>Description: {product.description} </p>
            <Link to={'/products/edit/'+ product._id}>Edit</Link>
        </div>
    );
    
};