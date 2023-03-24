import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DeleteButton } from "./DeleteButton";
import _ from 'lodash';

export const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        getAllAuthors();
    }, []);
    const getAllAuthors = async () => {
        await axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(_.orderBy(res.data,['name'],['asc']));
            });
    }
    const removeAuthor = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };

    return (
        <>
        <div className="text-center d-flex justify-content-start">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th className="d-grid gap-2 d-md-flex">Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, index) => 
                        <tr key={index}>
                            <td> {author.name} </td>
                            <td className="d-grid gap-2 d-md-flex">
                                <Link to={`/authors/edit/${author._id}`} className='btn btn-outline-success'>Edit</Link>
                                <DeleteButton author={author} removeAuthor={removeAuthor} />
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
        </div>
        </>
    );
};