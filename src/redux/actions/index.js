import actionType from "../constants/actionTypes";
import scheduleApi from "../../api/scheduleApi";
import common from "../../helper/common";

export const addSchedule = schedule => dispatch => {
    dispatch(common.actionWithoutData(actionType.ADD_SCHEDULE_BEGIN));
    scheduleApi
        .addSchedule(schedule)
        .then(res => {
            dispatch(
                common.actionWithData(actionType.ADD_SCHEDULE_SUCCESS, res.data)
            );
            dispatch(getSchedules());
        })
        .catch(err => {
            dispatch(
                common.actionWithData(
                    actionType.ADD_SCHEDULE_FAILURE,
                    err.message
                )
            );
        });
};

export const getSchedules = value => dispatch => {
    dispatch(common.actionWithoutData(actionType.GET_ALL_SCHEDULE_BEGIN));
    dispatch(loading(true));
    scheduleApi
        .getSchedules(value)
        .then(res => {
            dispatch(
                common.actionWithData(
                    actionType.GET_ALL_SCHEDULE_SUCCESS,
                    res.data
                )
            );
        })
        .catch(err => {
            dispatch(
                common.actionWithData(
                    actionType.GET_ALL_SCHEDULE_FAILURE,
                    err.message
                )
            );
        });
    dispatch(loading(false));
};

export const getSchedule = id => dispatch => {
    dispatch(common.actionWithoutData(actionType.GET_SCHEDULE_BEGIN));
    dispatch(loading(true));
    scheduleApi
        .getSchedule(id)
        .then(res => {
            dispatch(
                common.actionWithData(actionType.GET_SCHEDULE_SUCCESS, res.data)
            );
        })
        .catch(err => {
            dispatch(
                common.actionWithData(
                    actionType.GET_SCHEDULE_FAILURE,
                    err.message
                )
            );
        });
    dispatch(loading(false));
};

export const editSchedule = (id, schedule) => dispatch => {
    dispatch(common.actionWithoutData(actionType.EDIT_SCHEDULE_BEGIN));
    scheduleApi
        .editSchedule(id, schedule)
        .then(res => {
            dispatch(
                common.actionWithData(
                    actionType.EDIT_SCHEDULE_SUCCESS,
                    res.data
                )
            );
            dispatch(getSchedules());
        })
        .catch(err => {
            dispatch(
                common.actionWithData(
                    actionType.EDIT_SCHEDULE_FAILURE,
                    err.message
                )
            );
        });
};

export const loading = isLoading =>
    common.actionWithData(actionType.LOADING_REQUEST, isLoading);
