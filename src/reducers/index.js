const stock = [
    {
        id: 1,
        title: "Stock 1",
    },
    {
        id: 2,
        title: "Stock 2",
    },
];

const tasks = (state = { tasks: stock }, action) => state;
export default tasks;
