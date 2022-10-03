

export const setNotification = (anecdote, time) => {
    return dispatch => {
        const timeInMiliseconds = time * 1000
        dispatch(messageChange(anecdote))
        setTimeout(() => {
            dispatch(messageChange(''))
        }, timeInMiliseconds)
    }
}

const notificationSlice = createSlice({
    name: "notifications",
    initialState: '',
    reducers : {
        messageChange: (state, action) => {
            return action.payload
        }
    }
})


export default notificationSlice.reducer  