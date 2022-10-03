import axios from 'axios'

const baseUrl = 'http://localhost:3001/blogs'

const getAll = async () => {
    const response = axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    const newAnecdote = { anecdote, votes: 0}
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}



export default { getAll, createNew }