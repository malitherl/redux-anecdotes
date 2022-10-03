import { configureStore } from '@reduxjs/toolkit'
import voteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'


export const store = configureStore({
    reducer: {
      votes: voteReducer,
      notification: notificationReducer
    }
  })
  