import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            // const chosenOption = event.target.value
            setInteriors(parseInt(event.target.value))
        }
    }
)

// export const autoInterior = () => {
//     let html = `"<h2>Interiors</h2>"
//     <select id='interior'>
//     <option value="0">Select a technology package</option>`

//     // Use .map() for converting objects to <li> elements
//     const optionInterior = interiors.map(interior => {
//         return 
//             `<option value='${interior.id}'>${interior.interiorOptions}</option>`
//     })

//     html += optionInterior.join("")
//     html += "</select>"

//     return html
// }
export const autoInterior = () => {
    let html = `<h2>Interiors</h2>
    <select id='interior'>
    <option value="0">Select a technology package</option>`

    // Use .map() for converting objects to <li> elements
    for (const interior of interiors) {
        html +=    `<option value='${interior.id}'>${interior.interiorOptions}</option>`
    }

    
    html += "</select>"

    return html
}