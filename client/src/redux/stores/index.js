import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";


//"createStore" me lo tacha porque está deprecado/viejo. Ahora se usa en la nueva version "configureStore".
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));