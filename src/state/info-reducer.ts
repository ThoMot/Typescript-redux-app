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

//funksjon som kalles ved dispatch
export function addInfo(info: Info) {
    return {
        type: ADD_INFO,
        payload: info
    }
}



// reducer

interface InitialState {
    user: {
        userName: string,
        description: string
    }
}

const initialState: InitialState = {
    user: {
        userName: '',
        description: ''
    }
}

export function infoReducer(
    state = initialState,
    action: ActionTypes
): InitialState {
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
