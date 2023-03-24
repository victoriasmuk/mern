import React from "react";
import { Link } from "react-router-dom";
import { AuthorList } from "../components/AuthorList";

export const Main = () => {
    return (
        <div className="container w-50 mx-auto">
            <h2>Favorite Authors</h2>
            <Link to={'/authors/new'}>Add an author</Link>
            <p>We have quotes by:</p>
            <AuthorList/>
        </div>
    );
};