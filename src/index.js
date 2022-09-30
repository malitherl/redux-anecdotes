import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import voteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
const store = configureStore({
  reducer: {
    votes: voteReducer,
    notification: notificationReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
