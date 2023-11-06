import { combineReducers } from "redux";
import { userStore } from "../UserStoreFeatures/UserStoreFeatures";

export const rootReducer = combineReducers({
    user: userStore.reducer,
});