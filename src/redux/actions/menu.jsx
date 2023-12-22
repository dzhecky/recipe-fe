import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

let menuUrl = localStorage.getItem("token") ? `/recipe` : `/recipe/detail`;

export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MENU_PENDING" });
    const result = await axios.get(baseUrl + menuUrl, { headers });
    dispatch({ payload: result.data.data, type: "GET_MENU_SUCCESS" });
    console.log(result);
  } catch (err) {
    dispatch({ payload: err, type: "GET_MENU_ERROR" });
  }
};

export const getMenuDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_MENU_DETAIL_PENDING" });
    const result = await axios.get(baseUrl + `/recipe/${id}`, { headers });
    dispatch({ payload: result.data.data, type: "GET_MENU_DETAIL_SUCCESS" });
  } catch (err) {
    dispatch({ payload: err, type: "GET_MENU_DETAIL_ERROR" });
  }
};

export const deleteMenu = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_MENU_PENDING" });
    const result = await axios.delete(baseUrl + `/recipe/${id}`, { headers });
    dispatch({ payload: result.data.data, type: "DELETE_MENU_SUCCESS" });
    navigate('/')
  } catch (err) {
    dispatch({ payload: err, type: "DELETE_MENU_ERROR" });
  }
};
