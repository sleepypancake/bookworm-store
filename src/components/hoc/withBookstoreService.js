import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstoreServiceContext';

export const withBookstoreService = () => (Wrapped) => {

    return (props) => (
        <BookstoreServiceConsumer>
            {
                (bookstoreService) => (
                    <Wrapped {...props} bookstoreService={bookstoreService} />
                )
            }
        </BookstoreServiceConsumer>
    )

}