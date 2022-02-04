import React from "react";
import styles from './headerIconsLeft.module.scss'
import cn from 'classnames'
import { SearchIcon } from "../../icons/search";
import { CompareIcon } from "../../icons/compare";
import { LikeIcon } from "../../icons/like";
import { BasketIcon } from "../../icons/basket";
import { UserIcon } from "../../icons/user";


export const HeaderIconsLeft = (props) => (
    <div className={styles.headerIconsLeft}>
        <SearchIcon />
        <CompareIcon />
        <LikeIcon />
        <div className={styles.headerIconsLeft__user} >
            <UserIcon />
        </div> 
        <BasketIcon />
    </div>
)