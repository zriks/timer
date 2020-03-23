import _ from "lodash";

const actionWithoutData = type => ({
    type: type
});

const actionWithData = (type, data) => ({
    type: type,
    payload: data
});

const getDataFromQueryString = string =>
    _.chain(string)
        .replace("?", "")
        .split("&")
        .map(_.partial(_.split, _, "=", 2))
        .fromPairs()
        .value();

const objectToQueryString = obj => {
    return _.reduce(
        obj,
        (result, value, key) =>
            !_.isNull(value) && !_.isUndefined(value)
                ? (result += "&" + key + "=" + value)
                : result,
        ""
    );
};

const common = {
    actionWithoutData,
    actionWithData,
    getDataFromQueryString,
    objectToQueryString
};

export default common;
