import React from "react";
import styles from './headerIconsLeft.module.scss'
import { SearchIcon } from "../../icons/search";
import { CompareIcon } from "../../icons/compare";
import { LikeIcon } from "../../icons/like";
import { BasketIcon } from "../../icons/basket";
import { UserIcon } from "../../icons/user";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";


export const HeaderIconsLeft = (props) => {
    const cardItems = useSelector(state => state.cardItems)
    const counter = cardItems.reduce(function(accumulator, currentValue, index, array) {
        return accumulator + currentValue.count;
      }, 0);
    return (
        <div className={styles.headerIconsLeft}>
            <SearchIcon />
            <CompareIcon />
            <LikeIcon />
            <div className={styles.headerIconsLeft__user} >
                <UserIcon />
            </div> 
                <Link to="/basket">
                    <div className={styles.headerIconsLeft__basket}>
                        <BasketIcon />
                        <span className={styles.basketCounter}>{ counter }</span>
                    </div>
                </Link>
        </div>
    )
}