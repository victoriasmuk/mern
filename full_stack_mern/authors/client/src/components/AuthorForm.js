import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import _ from 'lodash';

export const AuthorForm = (props) => {
    const {formType, author, setAuthor} = props;
    const [errorMessages, setErrorMessages] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(formType)
        if(formType === 'update'){
            axios.get('http://localhost:8000/api/authors/' + params.id)
                .then(res => {
                    setAuthor(res.data);
                })
        }
    }, []);

    const createAuthor = async (author) => {
        await axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                console.log('Response: ', res)
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setErrorMessages(err?.response?.data?.errors);
                // let errors = err.response.data.errors;
                // _.keys(errors).map((errorType, index) =>  
                //     setErrorMessages({
                //         ...errorMessages,
                //         [errorType]: errors[errorType].message
                //     })
                // )
            });
    };

    const updateAuthor = async (author) => {
        axios.put('http://localhost:8000/api/authors/'+params.id, author)
        .then(res => {
            console.log('Response: ', res)
            navigate('/')
        })
        .catch(err=>console.log("Error: ", err))
    }

    const onChangeHandler = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formType === 'create'){
            createAuthor(author)
            setAuthor({
                name: ''
            })
        } else if (formType === 'update'){
            updateAuthor(author)
        }
    };


    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-3" >
                <input className="form-control" type='text' id="name" name="name" value={author.name} onChange={onChangeHandler} />
                <label className="form-label" >Name</label>
                {errorMessages?.name &&
                <div className = "text-danger small">{errorMessages.name.message}</div>
                }
            </div>
            <div className="d-grid gap-2 d-md-flex">
                <Link to='/' className="btn btn-outline-dark mb-3">Cancel</Link>
                <input value={(formType === 'create') ? 'Add' : 'Edit'} className="btn btn-outline-dark mb-3" type='submit' />
            </div>
        </form>
    );
};