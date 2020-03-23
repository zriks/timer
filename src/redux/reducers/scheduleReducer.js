import actionType from "../constants/actionTypes";

const initState = {
    schedules: [],
    selectSchedule: null,
    errorMessage: "",
    isLoading: true
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
        case actionType.LOADING_REQUEST:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
};
