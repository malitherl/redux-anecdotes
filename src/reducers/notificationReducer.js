const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD': 
        const quote = action.quote 
        return `You have added ${quote}`
        case 'LIKE':
        const liked = action.quote 
        return `You have liked ${liked}`
        default: 
        return state
    }
}

export default notificationReducer