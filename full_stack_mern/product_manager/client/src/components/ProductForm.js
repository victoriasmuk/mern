import React, {useState} from 'react';
import axios from 'axios'


export const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className='form-floating mb-3'>
                <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <label className='form-label'>Title</label>
            </div>
            <div className='form-floating mb-3'>
                <input className='form-control' type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                <label className='form-label'>Price</label>
            </div>
            <div className='form-floating mb-3'>
                <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                <label className='form-label'>Description</label>
            </div>
            <input className='btn btn-primary mb-3' type="submit" />
        </form>
    );
};