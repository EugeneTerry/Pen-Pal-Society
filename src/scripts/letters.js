import { getRequest } from "./dataAccess.js";

export const Letters = () => {
  const letters = getRequest()
  let html =`
    ${letters.map(letter => {
      return `
      Dear ${letter.recipient},

      ${letter.body}

      Sincerly ${letter.author}

      ${}
      `
    })}
    
  `
}