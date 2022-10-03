import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import voteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import anecdoteService from '../services/anecdote';

const store = configureStore({
  reducer: {
    votes: voteReducer,
    notification: notificationReducer
  }
})

anecdoteService.getAll().then(blogs => {
  store.dispatch(setAnecdotes(blogs))
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
