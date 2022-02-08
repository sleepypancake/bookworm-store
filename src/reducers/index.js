const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 250
}

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST': 
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            }

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }

        case 'BOOK_ADDED_TO_CARD': 
            const bookId = action.payload
            const { title, author, price, pic } = state.books.find(book => book.id === bookId)
            const itemIndex = state.cardItems.findIndex(item => item.id === bookId)
            const item = state.cardItems[itemIndex]
            console.log(state.cardItems, itemIndex, item)
            let newItem;
            if (item) {
                newItem = {
                    ...item,
                    count: ++item.count,
                }
            } else {
                newItem = {
                    id: bookId,
                    title,
                    author,
                    price,
                    pic,
                    count: 1,
                }
            }

            if ( itemIndex < 0 ) {
                return {
                    ...state,
                    cardItems: [
                        ...state.cardItems,
                        newItem
                    ]
                }
            } else {
                return {
                    ...state,
                    cardItems: [
                        ...state.cardItems.slice(0, itemIndex),
                        newItem,
                        ...state.cardItems.slice(itemIndex + 1),
                    ]
                }
            }
        
            
        default: 
            return state
    }
    
}