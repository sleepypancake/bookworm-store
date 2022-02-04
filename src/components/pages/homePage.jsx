import React from 'react';
import  BookList  from '../bookList/bookList'
import { FirstScreenHome } from '../firstScreenHome/firstScreenHome';

export const HomePage = () => {

    return (
        <div>
            <FirstScreenHome />
            <BookList/>
        </div>
    )
}
