import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductForm } from '../components/ProductForm';
import { DeleteButton } from '../components/DeleteButton';

export const Edit = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/edit/' + id, product)
        .then(res => console.log(res));
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h1>Update a Product</h1>
        {loaded && (
            <>
            <ProductForm
                onSubmitProp = {updateProduct}
                initialTitle = {product.title}
                initialPrice = {product.price}
                initialDescription = {product.description}
            />
            <DeleteButton productId={product._id} successCallback={() => navigate('/')} />
            </>
        )}
        </div>
    );
};