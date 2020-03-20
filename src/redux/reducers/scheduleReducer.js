import actionType from "../constants/actionTypes";

const initState = [];

export const scheduleReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SCHEDULE_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
};
