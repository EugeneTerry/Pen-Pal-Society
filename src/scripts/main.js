import { fetchRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")
const render = () => {
  fetchRequest().then(
    () => {
      mainContainer.innerHTML = PenPal()
    }
  )
}
render()
document.addEventListener("stateChanged",
  customEvent => {
    render()
  }
)