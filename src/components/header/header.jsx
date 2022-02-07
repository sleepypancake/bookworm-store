import React, { useState } from "react";
import { HeaderIconsLeft } from "../../ui/headerIconsLeft/headerIconsLeft";
import { Logo } from "../../ui/logo/logo";
import styles from './header.module.scss'
import { SideMenu } from "./sideMenu/sideMenu";

export const Header = (props) => {
    const [ sideMenuOpen, setSideMenuOpen ] = useState(false)
    console.log('sideMenuOpen', sideMenuOpen)

    const handleBurgerClick = () => {
        setSideMenuOpen(true)
    }

    return (
        <div className={styles.header}>
            <SideMenu opens={sideMenuOpen} />
            <div className={styles.header__wrapper}>
                <button className={styles.burger} onClick={handleBurgerClick}>
                    <span className={styles.burger__line} />
                </button>
                <Logo style={styles.logo}/>
                <HeaderIconsLeft />
            </div>
        </div>
    )
}
