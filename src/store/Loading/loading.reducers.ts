import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { LoadingState } from "./LoadingState";

const initialState: LoadingState= {
    show: false
}
const reducer = createReducer({
    show: false
},
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return{show: false};
    })
);

export function loadingReducer(state: LoadingState, action){
    return reducer(state, action);
}