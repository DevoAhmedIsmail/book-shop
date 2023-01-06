import {createSlice} from '@reduxjs/toolkit'

import {books} from '../assets/data'

const initialState = {
    books: [...books],
    book: {},
    relatedBooks: [],
    isLoading: false,
    errorMessage: null,
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getBookById: (state,action)=>{
           return state.book = state.books.find(book=> book.id === action.payload)
        },
        getRelatedBooks: (state,action)=>{
            for(let i = state.books.length;i > state.books.length-4;i--) {
                return  state.relatedBooks = [...state.books[i]]
            }
        }
     
    }   
})

export const {getBookById,getRelatedBooks} = booksSlice.actions;
export default booksSlice.reducer;