import anecdoteService from '../services/anecdote'
import { createSlice } from "@reduxjs/toolkit"
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll() 
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(anecdote)
    dispatch(appendAnecdote(anecdote))
  }
}

export const updateVote = (anecdote, id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateVotes(anecdote, id)
    dispatch(vote(anecdote))
  }
}

const voteSlice = createSlice({
  name: "votes", 
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(element => element.id === id)
      const updatedAnecdote= { 
      ...anecdoteToChange, 
      votes: anecdoteToChange.votes++
      }
      state.map(a => a.id !== id ? a : updatedAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})




export const { createNew, vote, appendAnecdote } = voteSlice.actions
export default voteSlice.reducer 

