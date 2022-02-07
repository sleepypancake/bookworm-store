import React, { useEffect, useRef } from "react";
import { withBookstoreService } from "../hoc/withBookstoreService";
import { connect } from 'react-redux'
import { booksLoaded } from '../../actions'
import { compose } from "../../utils";
import styles from './cardList.module.scss'
import { CardListItem } from "./cardListItem/cardListItem";

const CardList = ({ bookstoreService, booksLoaded, books }) => {
    // const [ books, setBooks ] = useState([])

    useEffect(() => {
        // setBooks(bookstoreService.getBooks())
        const data = bookstoreService.getBooks()
        booksLoaded(data)
    }, [])
    console.log(books)
    return (
        <div className={styles.list} >
            {books.map(item => (
                <CardListItem
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
)(CardList);