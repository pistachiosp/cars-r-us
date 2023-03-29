import { getCustomOrders, getPaintColors, getInteriors, getTechnologys, getWheels  } from "./database.js"
//const customOrders = getCustomOrders()
const buildOrderListItem = (order) => {
// Remember that the function you pass to find() must return true/false
// const order = getCustomOrders()
//added to add price to the string
const paintColor = getPaintColors()
const foundpaintcolor = paintColor.find(
    (paintColor) => {
        return paintColor.id === order.paintColorId
    }
)
// let totalCost = foundpaintcolor.price

const interior = getInteriors()
let foundinterior = interior.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)
// totalCost += foundinterior.price

const technology = getTechnologys()
let foundtechnology = technology.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)
const wheel = getWheels()
let foundwheel = wheel.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)
// totalCost += foundwheel.price

const totalCost = foundpaintcolor.price + foundinterior.price + foundtechnology.price + foundwheel.price
//new code
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li id="listorder">
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}