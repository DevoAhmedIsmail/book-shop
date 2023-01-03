import {createSlice} from '@reduxjs/toolkit'

import {books} from '../assets/data'

const initialState = {
    books: [...books],
    isLoading: false,
    errorMessage: null,
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    }   
})

export default booksSlice.reducer;