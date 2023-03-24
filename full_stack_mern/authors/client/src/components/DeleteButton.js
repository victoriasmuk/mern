import React from "react";
import axios from "axios";

export const DeleteButton = (props) => {
    const {author, removeAuthor} = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeAuthor(authorId);
            })
            .catch(err => {console.log(err)});
    };

    return (
        <button className="btn btn-outline-danger" onClick={(e) => deleteAuthor(author._id)} >
            Delete
        </button>
    )
};