import { combineReducers } from "redux";
import menu from './menu'
import menuAdd from "./menu-add";
import menuDelete from "./menu-delete";
import menuEdit from "./menu-edit";
import menuDetail from "./menu-detail";


const rootReducers = combineReducers({
    menu,
    menuAdd,
    menuDelete,
    menuEdit,
    menuDetail,
})

export default rootReducers