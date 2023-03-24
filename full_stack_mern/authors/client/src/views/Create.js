import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorForm } from '../components/AuthorForm';

export const Create = () => {
    const [author, setAuthor] = useState({
        name: ''
    });

    return (
        <div className='container'>
            <h2>Favorite Authors</h2>
            <Link to='/'>Home</Link>
            <p>Add a new author: </p>
            <AuthorForm
                formType={'create'}
                author={author}
                setAuthor={setAuthor}
            />
        </div>
    );
};