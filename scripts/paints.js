import { getPaintColors, setPaintColors } from "./database.js"

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paintColor") {
            setPaintColors(parseInt(event.target.value))
            // window.alert(``)
        }
    }
)
export const autoPaintColor = () => {
    let html = `<h2>Paint Color</h2>
    <select id='paintColor'>
    <option value="0">Select a Paint Color</option>`

    // Use .map() for converting objects to <li> elements
    for (const paintColor of paintColors) {
        html +=    `<option value='${paintColor.id}'>${paintColor.paintOptions}</option>`
    }

    
    html += "</select>"

    return html
}
// export const autoPaintColor = () => {
//     let html = "<select id='paintColor'>"

//     // Use .map() for converting objects to <li> elements
//     const optionPaintColor = paintColors.map(paintColor => {
//         return 
//             `<option value="0">Prompt to select resource...</option>`
//     })

//     html += optionPaintColor.join("")
//     html += "</select>"

//     return html
// }