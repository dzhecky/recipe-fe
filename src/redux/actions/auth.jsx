// import axios from "axios";
// const baseUrl = import.meta.env.VITE_BASE_URL;


// export const LoginAct = (email, password, navigate) => async (dispatch) => {
//     let data = {
//         email,
//         password
//     }
//   try {
//     dispatch({ type: "AUTH_PENDING" });
//     const result = await axios.post(baseUrl + '/user/login', data, { headers: { "content-type": "application/x-www-form-urlencoded" } });
//     dispatch({ payload: result.data.data, type: "AUTH_SUCCESS" });
//     navigate('/home')
//   } catch (err) {
//     dispatch({ payload: err, type: "AUTH_ERROR" });
//   }
// };

// export const LogoutAct = () => async (dispatch) =>{
//     dispatch()
// }
