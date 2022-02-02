import React from 'react'
import { withBookstoreService } from '../hoc/withBookstoreService'


const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks())

    return  <div>App</div>
}

export default withBookstoreService()(App)