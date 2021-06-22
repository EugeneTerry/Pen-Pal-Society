import { LetterInputForm } from "./LetterInputForm.js";
import { Letters } from "./letters.js";

export const PenPals = () => {
  return `
    <h1>Pen Pal Society</h1> 
    <section class = "letterInputForm">
    ${LetterInputForm()}
    </section>

    <section class="letterRequests">
          <h2>Letter</h2>
          <article class = "request">
          ${Letters()}
          </article>
      </section>
  `
}