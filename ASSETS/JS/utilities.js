const d = document

const printSuccessMessage = (successMessage) => {
    console.log(successMessage)
    let successMessageContainer = d.querySelector(".success-message")
    successMessageContainer.textContent = successMessage
    toggleMessageDisplay(successMessageContainer)
}

const printErrorMessage = (errorMessage) => {
    let errorMessageContainer = d.querySelector(".error-message")
    errorMessageContainer.textContent = errorMessage
    toggleMessageDisplay(errorMessageContainer)
}

const toggleMessageDisplay = async el => {
    console.log(el)
    el.classList.toggle("d-none")
    await new Promise(resolve => setTimeout(resolve, 3000))
    el.classList.toggle("d-none")
}

export {
    printSuccessMessage,
    printErrorMessage
}