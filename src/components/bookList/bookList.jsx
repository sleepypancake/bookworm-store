import React, { useRef } from "react";
import styles from './bookList.module.scss'
import { BookListItem } from "./bookListItem/bookListItem";

export const BookList = ({books, onAddedToCard}) => {
    const scrollContainer = useRef(null)

    const handleWheel = (e) => {
        scrollContainer.current.scrollLeft += e.deltaY
    }
    return (
        <div className={styles.list} onWheel={handleWheel} ref={scrollContainer}>
            {books.map(item => (
                <BookListItem
                    key = {item.id}
                    book = {item}
                    onAddedToCard={() => onAddedToCard(item.id)}
                />
            ))}
        </div>
    )
}