import { getRequests } from "./dataAccess.js"

export const Letters = () => {
  const letters = getRequests()
  let html =`
    <ul>
      ${letters.map(letter => {
        return `
          Dear ${letter.recipient},

          ${letter.body}

          Sincerly ${letter.author}
          `
        }).join("")
      }
    </ul>
  `
return html
}