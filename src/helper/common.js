const actionWithoutData = type => ({
    type: type
});
 
const actionWithData = (type, data) => ({
    type: type,
    payload: data
})

const common = { 
    actionWithoutData,
    actionWithData
};

export default common;
