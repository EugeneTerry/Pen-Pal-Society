const applicationState = {
  
}

const API = "http://localhost:8088"

export const fetchRequest = () => {
  return fetch(`${API}/letters`)
  .then(response => response.json())
  .then(
    (letterRequest) => {
      applicationState.letters = letterRequest
    }
  )
}

export const getRequests = () => {
  return applicationState.letters.map(letter => ({...letter}));
}

export const sendLetterRequest = (userLetterRequest) => {
  const fetchOptions = {
    method: "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userLetterRequest)
  }
  return fetch(`${API}/letters`, fetchOptions)
  .then(() => {
    document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}