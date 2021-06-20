import { fetchRequest } from "./dataAccess.js";
import { PenPals } from "./PenPal.js";

const mainContainer = document.querySelector("#container")
const render = () => {
  fetchRequest().then(
    () => {
      mainContainer.innerHTML = PenPals()
    }
  )
}
render()
document.addEventListener("stateChanged", customEvent => {
    render()
  }
)