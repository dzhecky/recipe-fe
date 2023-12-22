const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: '',
}

const menuEdit = (state=initialState, action) =>{
    if(action.type === 'EDIT_MENU_PENDING'){
        return{
            ...state,
            isLoading: true
        }
    } else if(action.type === 'EDIT_MENU_SUCCESS'){
        return{
            ...state,
            isLoading: false,
            isSuccess: true,
            isError: false,
            data: action.payload
        }
    } else if(action.type === 'EDIT_MENU_ERROR'){
        return{
            ...state,
            isLoading: false,
            isSuccess: false,
            isError: true,
            errorMessage: action.payload
        }
    } else{
        return state
    }
}

export default menuEdit