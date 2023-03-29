import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            //const chosenOption = event.target.value
            setWheels(parseInt(event.target.value))
        }
    }
)

export const autoWheel = () => {
    let html = `<h2>Wheel Package</h2>
    '<select id="wheel">'
    '<option value="0">Select a wheel package</option>`

    // Use .map() for converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<option value='${wheel.id}'>${wheel.wheelOptions}</option>`
    }

    
    html += "</select>"

    return html
}