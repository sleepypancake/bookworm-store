import React, { useEffect, useState } from "react";
import { withBookstoreService } from "../hoc/withBookstoreService";
import { BookListItem } from "./bookListItem/bookListItem";
import { connect } from 'react-redux'

const BookList = ({ bookstoreService }) => {
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        setBooks(bookstoreService.getBooks())
    }, [])
    console.log(books)
    return (
        <>
            {books.map(item => (
                <BookListItem
                    key = {item.id} 
                    book = {item}
                />
            ))}
        </>
    )
}
    
const mapStateToProps = ({ books }) => {
    return { books }
}

const mapDispatchToProps = dispatch => {
    return {
        booksLoaded: (newBooks) => {
            dispatch({
                type: 'BOOKS_LOADED',
                payload: newBooks
            })
        }
    }
}

export default withBookstoreService()(connect(mapStateToProps)(BookList))