import { LetterInputForm } from "./LetterInputForm.js";
import { Letters } from "./letters.js";

export const PenPals = () => {
  return `
  <header class="header">
    <img src="./images/PenPal.png" class="logo" />
    <h1>Pen Pal Society</h1>
  </header>
    <section class = "letterInputForm">
    ${LetterInputForm()}
    </section>

    <h2>Letter</h2>
    <section class="letterRequests">
          <article class = "request">
          ${Letters()}
          </article>
      </section>
  `
}