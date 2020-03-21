import axiosFetch from "../helper/axiosConfig";

const getSchedules = () =>
    axiosFetch.get("schedules?_sort=createAt&_order=desc");
const getSchedule = id => axiosFetch.get("schedules/" + id);

const addSchedule = schedule => axiosFetch.post("schedules", schedule);

const editSchedule = (id, schedule) => axiosFetch.put("schedules/" + id, schedule);


const scheduleAction = {
    getSchedules,
    getSchedule,
    addSchedule,
    editSchedule
};

export default scheduleAction;
