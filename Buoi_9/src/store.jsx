import { createStore } from "redux";
import couterReducer from "./reducers/couterReducer";

const store = createStore(couterReducer);

export default store;