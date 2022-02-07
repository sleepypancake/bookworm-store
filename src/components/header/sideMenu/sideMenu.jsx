import React, { useRef, useState } from "react";
import styles from './sideMenu.module.scss'
import cn from 'classnames'

export const SideMenu = ({opens}) => {
    const [ menuOpens, setMenuOpens ] = useState(opens)
    const refMenu = useRef(null)
    const handleCloseMenu = () => {
        return setMenuOpens(false)
    }
    // useOnClickOutside(refMenu, handleCloseMenu)
console.log(menuOpens, opens)
    return (
        <div className={cn(styles.sideMenu, menuOpens && styles.opens)}>
            <div className={styles.sideMenu__wrapper}> </div>
            <div className={styles.sideMenu__menu} ref={refMenu}></div>
        </div>
    )
}