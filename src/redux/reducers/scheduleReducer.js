import { ADD_SCHEDULE } from "../constants/actionTypes";

const initState = [];

export default function scheduleReducer(state = initState, action) {
    switch (action.type) {
        case ADD_SCHEDULE:
            return [...state, action.payload];
        default:
            state;
    }
}
