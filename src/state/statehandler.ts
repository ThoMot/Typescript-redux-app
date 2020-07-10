//typer: 

interface Info {
    user: {
        userName: string
        description: string
    }
}

// actions
const ADD_INFO = 'ADD_INFO';

interface addInfoAction {
    type: typeof ADD_INFO
    payload: Info
}

type ActionTypes = addInfoAction

function addInfo(info: Info) {
    return {
        type: ADD_INFO,
        payload: info
    }
}



// reducer

interface UserState {
    user: {
        userName: string,
        description: string
    }
}

const initialState: UserState = {
    user: {
        userName: '',
        description: ''
    }
}

export function infoReducer(
    state = initialState,
    action: ActionTypes
): UserState {
    switch (action.type) {
        case ADD_INFO:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
