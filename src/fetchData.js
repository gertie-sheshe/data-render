const populateObject = () => {
    let offers = {};
    let newDate = new Date();

    for (let i = 0; i < 10; i++) {
        offers[i] = {
            id: i,
            date: new Date(newDate.setMinutes(newDate.getMinutes() + i * 10)),
            amount: Math.random() * 10,
            bid: 9.5 + Math.random()
        };
    }

    return offers;
}

export default populateObject;
