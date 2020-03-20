import axiosFetch from "../helper/axiosConfig";

const getSchedules = () => axiosFetch.get("schedules?_sort=createAt&_order=desc");

const addSchedule = schedule => axiosFetch.post("schedules", schedule);

const scheduleAction = {
    getSchedules,
    addSchedule
};

export default scheduleAction;
