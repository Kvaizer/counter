import {StoreType} from './store';
import {ThunkAction} from 'redux-thunk';

export const initialState = {
    value: 0,
    borders: [0, 5],
    editMode: false
}

type StateType = typeof initialState

export type ActionsType = IncAT | ResetAT | SetBordersAT | ChangeEditModeAT | setValueAT

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INC-VALUE': {
            return {
                ...state,
                value: action.value + 1
            }
        }

        case 'RESET-VALUE': {
            return {
                ...state,
                value: state.borders[0]
            }
        }

        case 'SET-BORDERS': {
            return {
                ...state,
                borders: action.borders
            }
        }

        case 'CHANGE-EDIT-MODE': {
            return {
                ...state,
                editMode: action.editMode
            }
        }

        case 'SET-VALUE': {
            return {
                ...state,
                value: action.newValue
            }
        }

        default:
            return state
    }
}

export const incAC = (value: number) => ({
    type: 'INC-VALUE', value
} as const)

export const resetAC = () => ({
    type: 'RESET-VALUE',
} as const)

export const setBordersAC = (borders: number[]) => ({
    type: 'SET-BORDERS',
    borders
} as const)

export const changeEditModeAC = (editMode: boolean) => ({
    type: 'CHANGE-EDIT-MODE',
    editMode,
} as const)

export const setValueAC = (newValue: number) => ({
    type: 'SET-VALUE',
    newValue,
} as const)

type IncAT = ReturnType<typeof incAC>
type ResetAT = ReturnType<typeof resetAC>
type SetBordersAT = ReturnType<typeof setBordersAC>
type ChangeEditModeAT = ReturnType<typeof changeEditModeAC>
type setValueAT = ReturnType<typeof setValueAC>

export type ThunkType = ThunkAction<void, StoreType, unknown, ActionsType>

export const saveToLocalStorageValueTC = (): ThunkType  => (dispatch, getState: () => StoreType) => {
    dispatch(incAC(getState().counter.value))
    localStorage.setItem('counterValue', JSON.stringify(getState().counter.value))
}

export const getFromLocalStorageAfterResetTC = (): ThunkType => (dispatch, getState: () => StoreType) => {
    dispatch(resetAC())
    localStorage.setItem('counterValue', JSON.stringify(getState().counter.borders[0]))
}

export const saveToLocalStorageBordersTC = (minMax: number[]): ThunkType => (dispatch, getState: () => StoreType) => {
    dispatch(changeEditModeAC(false))
    dispatch(setValueAC(minMax[0]))
    dispatch(setBordersAC(minMax))
    dispatch(resetAC())
    localStorage.setItem('bordersOfCounter', JSON.stringify(getState().counter.borders))
}

export const getValueFromLocalStorageTC = (): ThunkType => (dispatch ) => {
    const counterAsString = localStorage.getItem('counterValue')
    if(counterAsString) dispatch(setValueAC(JSON.parse(counterAsString)))
}

export const getBordersFromLocalStorageTC = (): ThunkType => (dispatch) => {
    const bordersAsString = localStorage.getItem('bordersOfCounter')
    if(bordersAsString) dispatch(setBordersAC(JSON.parse(bordersAsString)))
}



export const selectAll = (store: StoreType) => store.counter
export const selectBorders = (store: StoreType) => store.counter.borders
