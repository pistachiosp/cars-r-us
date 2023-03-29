import { addCustomOrder } from "./database.js"
import { autoPaintColor } from "./paints.js"
import { autoInterior } from "./interiors.js"
import { autoTechnology } from "./technologies.js"
import { autoWheel } from "./wheels.js"
import { Orders } from "./Orders.js"

// Implement the correct code to check if the order button was clicked.
// Invoke the addCustomOrder function when it is clicked
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("placeAnOrder")) {
            addCustomOrder()
    }}
)

//document.dispatchEvent(new CustomEvent("stateChanged"))
export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${autoPaintColor()}
            </section>
            <section class="choices__interiors options">
                ${autoInterior()}
            </section>
            <section class="choices__technologys options">
                ${autoTechnology()}
            </section>
            <section class="choices__wheels options">
                ${autoWheel()}
            </section>
        </article>

        <article>
            <button id="placeAnOrder">Place An Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Auto Order</h2>
            ${Orders()}
        </article>`
}