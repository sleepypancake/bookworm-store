import React, { useEffect, useRef } from "react";
import { withBookstoreService } from "../hoc/withBookstoreService";
import { BookListItem } from "./bookListItem/bookListItem";
import { connect } from 'react-redux'
import { booksLoaded } from '../../actions'
import { compose } from "../../utils";
import styles from './bookList.module.scss'

const BookList = ({ bookstoreService, booksLoaded, books }) => {
    // const [ books, setBooks ] = useState([])

    const scrollContainer = useRef(null)

    const handleWheel = (e) => {
        scrollContainer.current.scrollLeft += e.deltaY
    }
    useEffect(() => {
        // setBooks(bookstoreService.getBooks())
        const data = bookstoreService.getBooks()
        booksLoaded(data)
    }, [])
    console.log(books)
    return (
        <div className={styles.list} onWheel={handleWheel} ref={scrollContainer}>
            {books.map(item => (
                <BookListItem
                    key = {item.id}
                    book = {item}
                />
            ))}
        </div>
    )
}
    
const mapStateToProps = ({ books }) => {
    return { books }
}

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);