import React from "react";
import styles from './cardList.module.scss'
import { CardListItem } from "./cardListItem/cardListItem";

export const CardList = ({ items, total, onIncrease, onDecrease, onDelete }) =>  {

    return (
        <div className={styles.wrapper}>
            <div className={styles.list} >
                {items.map(item => (
                    <CardListItem
                        key = {item.id}
                        book = {item}
                        onIncrease={() => onIncrease(item.id)}
                        onDecrease={() => onDecrease(item.id)}
                        onDelete={() => onDelete(item.id)}
                    />
                ))}
            </div>
            <div className={styles.payment}>
                <span>Total: </span>
                <span>${total}</span>
            </div>
        </div>
    )
}
    
