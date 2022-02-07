import React from "react";
import { Button } from "../../../ui/button/button";
import styles from './cardListItem.module.scss'

export const CardListItem = ({ book: {title, author, price, pic} }) => (
    <div className={styles.card}>
        <div className={styles.card__pic}>
            <img src={pic} alt={title} />
        </div>
        <div className={styles.card__info}>
            <h2 className={styles.card__title}>{title}</h2>
            <span className={styles.card__author}>{author}</span>
        </div>
        <span className={styles.card__price}>{price}</span>
        <div className={styles.controls}>
            <button className={styles.control__btn}/>
            <p className={styles.control__num}>1</p>
            <button className={styles.control__btn}/>
        </div>
        <Button className={styles.card__btn}>Remove</Button>
    </div>
)