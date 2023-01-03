import {configureStore} from '@reduxjs/toolkit'
import books from './booksSlice'

const store = configureStore({
    reducer: {
        books
    }
});

export default store;