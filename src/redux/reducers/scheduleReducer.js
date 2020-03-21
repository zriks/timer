import actionType from "../constants/actionTypes";

const initState = {
    schedules: [],
    selectSchedule: null,
    errorMessage: ""
};

export const scheduleReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_SCHEDULE_SUCCESS:
            return {
                ...state,
                schedules: [...action.payload]
            };
        case actionType.GET_SCHEDULE_SUCCESS:
            return {
                ...state,
                selectSchedule: action.payload
            };
        case (actionType.GET_ALL_SCHEDULE_FAILURE,
            actionType.GET_SCHEDULE_SUCCESS):
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};
