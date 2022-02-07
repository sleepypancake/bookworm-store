import React from "react";
import { Button } from "../../../ui/button/button";
import styles from './bookListItem.module.scss'

export const BookListItem = ({ book: {title, author, price, pic} }) => (
    <div className={styles.card}>
        <div className={styles.card__info}>
            <h2 className={styles.card__title}>{title}</h2>
            <span className={styles.card__author}>{author}</span>
            <span className={styles.card__price}>{price}</span>
            <Button >Add to card</Button>
        </div>
        <div className={styles.card__pic}>
            <img src={pic} alt={title} />
        </div>
    </div>
)