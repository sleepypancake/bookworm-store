import React from "react";
import styles from './headerIconsLeft.module.scss'
import { SearchIcon } from "../../icons/search";
import { CompareIcon } from "../../icons/compare";
import { LikeIcon } from "../../icons/like";
import { BasketIcon } from "../../icons/basket";
import { UserIcon } from "../../icons/user";
import { Link, BrowserRouter as Router } from "react-router-dom";


export const HeaderIconsLeft = (props) => (
    <div className={styles.headerIconsLeft}>
        <SearchIcon />
        <CompareIcon />
        <LikeIcon />
        <div className={styles.headerIconsLeft__user} >
            <UserIcon />
        </div> 
            <Link to="/basket">
                <BasketIcon />
            </Link>
    </div>
)