import React, { useEffect } from "react";
import { withBookstoreService } from "../hoc/withBookstoreService";
import { connect } from 'react-redux'
import { fetchBooks, bookAddedToCard } from '../../actions'
import { compose } from "../../utils";
import { Spinner } from "../spinner/spinner";
import { ErrorIndicator } from "../errorIndicator/errorIndicator";
import { BookList } from "./bookList";

const BookListContainer = ({ fetchBooks, books, loading, error, onAddedToCard }) => {
    
    useEffect(() => {
        fetchBooks()
    }, [])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <BookList books={books} onAddedToCard={onAddedToCard} />
    )
}
    
const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCard: (id) => dispatch(bookAddedToCard(id))
    }
    
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);