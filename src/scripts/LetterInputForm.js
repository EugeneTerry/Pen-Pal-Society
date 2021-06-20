import { sendLetterRequest } from "./dataAccess.js";

const mainContainer= document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.targetid === "sendLetter") {
    const userAuthor = document.querySelector("input[name='letterAuthor']").value
    const userBody = document.querySelector("input[name='letterBody']").value
    const userTopic = document.querySelector("input[name='letterTopic']").value
    const userRecipient = document.querySelector("input[name='letterRecipient']").value
    
    const dataToSendToAPI = {
      author: userAuthor,
      body: userBody,
      topic: userTopic,
      recipient: userRecipient
    }
    sendLetterRequest(dataToSendToAPI);
  }
})

export const LetterInputForm = () => {
  let html = `
      <div class="field">
      <label class = "label"
      for = "letterAuthor">Author</label>
      <select id = "authorSelection" class = "select">
        <option vaule ="stephenKing">Stephen King</option>
        <option vaule ="markTwain">Mark Twain</option>
        <option vaule ="jamesBaldwin">James Baldwin</option>
        <option vaule ="mayaAngelou">Maya Angelou</option>
      </select>
    </div>
    <div class="field">
      <label class = "label"
      for = "letterBody">Letter</label>
      <textarea name = "letterBody" cols="50" rows="10"></textarea>
    </div>
    <div class="field">
      <label class = "label"
        for = "letterTopic">Topic</label>
          <input type="checkbox" id = "letterTopic" name= "business" value= "Business"/>Business
          <input type="checkbox" id = "letterTopic" name= "friendly" value= "Friendly"/>Friendly
          <input type="checkbox" id = "letterTopic" name= "business" value= "Business"/>Business
          <input type="checkbox" id = "letterTopic" name= "congratulations" value= "Congratulations"/>Congratulations
          <input type="checkbox" id = "letterTopic" name= "condolences" value= "Condolences"/>Condolences
        </label>
      </div>
      <button id = "sendLetter">Send Letter</button>
    `
    return html;
}