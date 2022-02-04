import React from "react";

export const BookListItem = ({ book: {title, author} }) => (
    <>
        <span>{title}</span>
        <span>{author}</span>
    </>
)