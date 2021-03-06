import React from 'react'
import cn from 'classnames'
import { Route, Routes } from 'react-router-dom'
import { CardPage } from '../pages/cardPage'
import { HomePage }  from '../pages/homePage'
import styles from './app.module.scss'
import { withBookstoreService } from '../hoc/withBookstoreService'
import { BasketPage } from '../pages/basketPage'


const App = ({ bookstoreService }) => ( 
    <div className={cn(styles.container, bookstoreService.sideMenu === 'open' && styles.container__noscroll)}>
        <div className={cn(bookstoreService.sideMenu === 'open' && styles.container__wrapper)}></div>     
        <Routes>
            <Route 
                path="/"
                element={<HomePage/>}
                exact
            />
            <Route 
                path="/card"
                element={<CardPage/>}
                exact
            />
            <Route 
                path="/basket"
                element={<BasketPage/>}
                exact
            />
        </Routes>
    </div>
    
)

export default withBookstoreService()(App)