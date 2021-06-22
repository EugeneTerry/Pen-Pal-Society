import { sendLetterRequest } from "./dataAccess.js";

const mainContainer= document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "sendLetter") {
    const theSelectedAuthor = document.getElementById("authorSelection").options.selectedIndex
    const userSelectedAuthor = document.getElementById("authorSelection").options[theSelectedAuthor].text
    const userBody = document.querySelector("textarea[name='letterBody']").value
    const userTopic = document.querySelector("input[name='letterTopic']").value
    const theSelectedRecipient = document.getElementById("recipientSelection").options.selectedIndex
    const userselectedRecipient = document.getElementById("recipientSelection").options[theSelectedRecipient].text
    
    const dataToSendToAPI = {
      author: userSelectedAuthor,
      body: userBody,
      topic: userTopic,
      recipient: userselectedRecipient
    }
    sendLetterRequest(dataToSendToAPI);
  }
})

export const LetterInputForm = () => {
  let html = `<h3>Author</h3>
    <div class="field">
      <label class = "label"
        for = "letterAuthor"></label>
          <select id = "authorSelection" class = "select">
            <option vaule ="stephenKing">Stephen King</option>
            <option vaule ="markTwain">Mark Twain</option>
            <option vaule ="jamesBaldwin">James Baldwin</option>
            <option vaule ="mayaAngelou">Maya Angelou</option>
          </select>
    </div>
    <h3>Letter</h3>
    <div class="field">
      <label class = "label"
      for = "letterBody"></label>
      <textarea name = "letterBody" cols="50" rows="10"></textarea>
    </div>
    <h3>Topic</h3>
    <div class="topic">
      <label class = "label"
        for = "letterTopic"></label>
          <input type="radio" id = "letterTopic" name= "letterTopic" value= "Business"/>Business
          <input type="radio" id = "letterTopic" name= "letterTopic" value= "Friendly"/>Friendly
          <input type="radio" id = "letterTopic" name= "letterTopic" value= "Business"/>Family
          <input type="radio" id = "letterTopic" name= "letterTopic" value= "Congratulations"/>Congratulations
          <input type="radio" id = "letterTopic" name= "letterTopic" value= "Condolences"/>Condolences
        </label>
      </div>
      <h3>Recipient</h3>
      <div class="field">
      <label class = "label"
        for = "letterrecipient"></label>
          <select id = "recipientSelection" class = "select">
            <option vaule ="stephenKing">Stephen King</option>
            <option vaule ="markTwain">Mark Twain</option>
            <option vaule ="jamesBaldwin">James Baldwin</option>
            <option vaule ="mayaAngelou">Maya Angelou</option>
          </select>
    </div>
      <button id = "sendLetter">Send Letter</button>
    `
    return html;
}