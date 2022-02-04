import React from "react";
import { HeaderIconsLeft } from "../../ui/headerIconsLeft/headerIconsLeft";
import { Logo } from "../../ui/logo/logo";
import styles from './header.module.scss'
import { SideMenu } from "./sideMenu/sideMenu";

export const Header = (props) => (
    <div className={styles.header}>
        <button className={styles.burger}>
            <span className={styles.burger__line} />
        </button>
        <SideMenu />
        <Logo style={styles.logo}/>
        <HeaderIconsLeft />
    </div>
)