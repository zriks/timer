import actionType from "../constants/actionTypes";
import scheduleApi from "../../api/scheduleApi";
import history from "../../helper/history";

export const addSchedule = schedule => {
    return dispatch => {
        dispatch({ type: actionType.ADD_SCHEDULE_BEGIN });
        scheduleApi
            .addSchedule(schedule)
            .then(res => {
                dispatch({
                    type: actionType.ADD_SCHEDULE_SUCCESS,
                    payload: res
                });
                history.push("/list");
                dispatch(getSchedules());
            })
            .catch(err => {
                dispatch({ type: actionType.ADD_SCHEDULE_FAILURE });
            });
    };
};

export const getSchedules = () => {
    return dispatch => {
        dispatch({ type: actionType.GET_ALL_SCHEDULE_BEGIN });
        scheduleApi
            .getSchedules()
            .then(res => {
                dispatch({
                    type: actionType.GET_ALL_SCHEDULE_SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({ type: actionType.GET_ALL_SCHEDULE_FAILURE });
            });
    };
};
