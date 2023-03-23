import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Edit = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/edit/' + id, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div className='form-floating mb-3'>
                    <input className='form-control' type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                    <label className='form-label'>Title:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input className='form-control' type="number" name="title" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                    <label className='form-label'>Price:</label>
                </div>
                <div className='form-floating mb-3'>
                    <input className='form-control' type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                    <label className='form-label'>Description:</label>
                </div>
                <input className='btn btn-primary mb-3' type='submit' value='Update' />
            </form>
        </div>
    )
};