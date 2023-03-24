import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { AuthorForm } from '../components/AuthorForm';

export const Update = () => {
    const [author, setAuthor] = useState({
        name: ''
    });
    const [authorExists, setAuthorExists] = useState(false);
    const params = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + params.id)
            .then(res => {
                setAuthor(res.data);
                setAuthorExists(true);
            })
            .catch(err => {
                console.log(err)
                setAuthorExists(false);
            })
    }, []);

    return (
        <div className='container'>
            {authorExists 
            ? 
            <>
                <h2>Favorite Authors</h2>
                <Link to='/'>Home</Link>
                <p>Edit this author:</p>
                <AuthorForm
                    formType={'update'}
                    author={author}
                    setAuthor={setAuthor}
                />
            </>
            :
            <>
                <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
                <Link to={'/authors/new'}>Add New Author</Link>
            </>
            }
        </div>
    );
};