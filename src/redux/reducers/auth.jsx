// const initialState = {
//     data: null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     errorMessage: '',
// }

// const auth = (state=initialState, action) =>{
//     if(action.type === 'AUTH_PENDING'){
//         return{
//             ...state,
//             isLoading: true
//         }
//     } else if(action.type === 'AUTH_SUCCESS'){
//         return{
//             ...state,
//             isLoading: false,
//             isSuccess: true,
//             data: action.payload
//         }
//     } else if(action.type === 'AUTH_ERROR'){
//         return{
//             ...state,
//             isLoading: false,
//             isSuccess: false,
//             isError: true,
//             errorMessage: action.payload
//         }
//     } else if(action.type === 'AUTH_LOGOUT'){
//         return{
//             ...state,
//             data: null,
//             isError: false,
//             isSuccess: false,
//             isLoading: false,
//             errorMessage: '',
//         }
//     }
//      else{
//         return state
//     }
// }

// export default auth