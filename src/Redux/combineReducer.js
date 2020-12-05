import { combineReducers } from "redux";
import { dataReducer } from "./Reducers/dataReducer";
import { searchReducer } from "./Reducers/searchReducer";
import { darkReducer } from "./Reducers/darkReducer";
export const masterReducer = combineReducers({
     data: dataReducer,
     search: searchReducer,
     dark: darkReducer,
});
