import { ADD_SCHEDULE } from "../constants/actionTypes";

export const addSchedule = schedule => ({
    type: ADD_SCHEDULE,
    payload: schedule
});
