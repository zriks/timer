import axiosFetch from "../helper/axiosConfig";
import common from "../helper/common";

const getSchedules = value => {
    const query = common.objectToQueryString(value);
    return axiosFetch.get("schedules?_sort=createAt&_order=desc" + query);
};
const getSchedule = id => axiosFetch.get("schedules/" + id);

const addSchedule = schedule => axiosFetch.post("schedules", schedule);

const editSchedule = (id, schedule) =>
    axiosFetch.put("schedules/" + id, schedule);

const scheduleAction = {
    getSchedules,
    getSchedule,
    addSchedule,
    editSchedule
};

export default scheduleAction;
