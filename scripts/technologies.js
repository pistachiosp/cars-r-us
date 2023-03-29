import { getTechnologys, setTechnologys } from "./database.js"

const technologys = getTechnologys()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            //const chosenOption = event.target.value
            setTechnologys(parseInt(event.target.value))
        }
    }
)
export const autoTechnology = () => {
    let html = `<h2>Technology Package</h2>
     <select id=technology>
     <option value="0">Select a technology package</option>`

    // Use .map() for converting objects to <li> elements
    for (const technology of technologys) {
        html +=    `<option value='${technology.id}'>${technology.technologyOptions}</option>`
    }

    
    html += "</select>"

    return html
}
// export const autoInterior = () => {
//     let html = "<select id='interior'>"

//     // Use .map() for converting objects to <li> elements
//     const optionInterior = interiors.map(interior => {
//         return 
//             `<option value="0">Prompt to select resource...</option><option value="${interior.id}">First option</option>`
//     })

//     html += optionInterior.join("")
//     html += "</select>"

//     return html
// }