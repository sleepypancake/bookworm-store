import React, { useEffect } from "react";
import { withBookstoreService } from "../hoc/withBookstoreService";
import { connect } from 'react-redux'
import { fetchBooks } from '../../actions'
import { compose } from "../../utils";
import { Spinner } from "../spinner/spinner";
import { ErrorIndicator } from "../errorIndicator/errorIndicator";
import { CardList } from "./cardList";

const CardListComponent = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    // const [ books, setBooks ] = useState([])

    useEffect(() => {
        // setBooks(bookstoreService.getBooks())
        fetchBooks()
    }, [])

    return (
        <CardList 
            items={items}
            total={total}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
         />
    )
}
    
const mapStateToProps = ({ cardItems, orderTotal }) => {
    return { 
        items: cardItems, 
        total: orderTotal
    }
}

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => console.log(`${id} +1`),
        onDecrease: (id) => console.log(`${id} -1`),
        onDelete: (id) => console.log(`${id} delete`),
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CardListComponent);