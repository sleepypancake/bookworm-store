import React from 'react';
import  BookListContainer  from '../bookList/bookListContainer'
import { FirstScreenHome } from '../firstScreenHome/firstScreenHome';

export const HomePage = () => {

    return (
        <div>
            <FirstScreenHome />
            <BookListContainer/>
        </div>
    )
}
