/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    orderBuilder: {},
    paintColors: [
        { id: 1, paintOptions: 'Silver', price: 350}, 
        { id: 2, paintOptions: 'Midnight Blue', price: 300},
        { id: 3, paintOptions: 'Firebrick Red', price: 200},
        { id: 4, paintOptions: 'Spring Green', price: 250}
],
interiors: [
    { id:1, interiorOptions: 'Beige Fabric', price:350},
    { id:2, interiorOptions: 'Charcoal Fabric', price:350},
    { id:3, interiorOptions: 'White Leather', price:550},
    { id:4, interiorOptions: 'Black Leather', price:550}
],
technologys: [
    { id:1, technologyOptions: 'Basic Package (basic sound system)', price:350},
    { id:2, technologyOptions: 'Navigation Package (includes integrated navigation controls)', price:450},
    { id:3, technologyOptions: 'Visibility Package (includes side and reat cameras)c', price:550},
    { id:4, technologyOptions: 'Ultra Package (includes navigation and visibility packages)', price:650}
],
wheels: [
    { id:1, wheelOptions: '17-inch Pair Radial', price:350},
    { id:2, wheelOptions: '17-inch Pair Radial Black', price:450},
    { id:3, wheelOptions: '18-inch Pair Spoke Silver', price:750},
    { id:4, wheelOptions: '18-inch Pair Spoke Black', price:850}
],
customOrders: [
    {
        id: 1,
        paintColorId: 3,
        interiorId: 2,
        technologyId: 3,
        wheelId: 2,
        timestamp: 1614659931693
    }
]}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getTechnologys = () => {
    return database.technologys.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}


export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))}
// Now you need to export functions whose responsibility is to set state.

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}
export const setPaintColors = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setTechnologys = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
        const newOrder = {...database.orderBuilder}
// Add a new primary key to the object
const lastIndex = database.customOrders.length - 1
newOrder.id = database.customOrders[lastIndex].id + 1
// Add a timestamp to the order
newOrder.timestamp = Date.now()
// Add the new order object to custom orders state
database.customOrders.push(newOrder)
// Reset the temporary state for user choices
database.orderBuilder = {}
// Broadcast a notification that permanent state has changed
document.dispatchEvent(new CustomEvent("stateChanged"))
}

// Make sure there is a foreign key for each options type on the new object.
// Make sure there is a new primary key value that is 1 greater than the current highest one.
// Make sure there is a timestamp on the order.
// Make sure you clear out the state that was being used to store the user options once the order state is created.
// Trigger the stateChanged custom events and have the main module listen for it and regenerate all of the HTML.
