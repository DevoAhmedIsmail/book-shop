import {configureStore} from '@reduxjs/toolkit'
import books from './booksSlice'
import cart from './cartSlice'

const store = configureStore({
    reducer: {
        books,
        cart
    }
});

export default store;