import { getRequests } from "./dataAccess.js"

export const Letters = () => {
  const letters = getRequests()
  const d = new Date()
  let html =`
    <ul>
      ${letters.map(letter => {
        return `
         <p> Dear ${letter.recipient}, </p>
         <p>${letter.body}</p>
         <p>Sincerly, ${letter.author}</p>
         <p>Sent on: ${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()}</p>
         <button class = "topicButton">${letter.topic}</button>
          `
        }).join("")
      }
    </ul>
  `
return html
}