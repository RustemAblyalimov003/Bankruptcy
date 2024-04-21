$(document).ready(() => {
    const form = document.getElementById("consultation-popup__form")
    const formInputs = document.querySelectorAll(".consultation-popup__input")
    const inputName = document.getElementById("consultation-popup__form-input-name")
    const inputPhone = document.getElementById("consultation-popup__form-input-phone")
    const inputMail = document.getElementById("consultation-popup__form-input-mail")
    const checkAgreement = document.getElementById("consultation-popup__chekbox-input")
    const checkText = document.getElementById("consultation-popup__chekbox-label")
    const textArea = document.getElementById("consultation-popup__textarea")

    const submitForm = (event) => {
        event.preventDefault()

        const nameValue = inputName.value
        const phoneValue = inputPhone.value
        const mailValue = inputMail.value
        const agreementValue = checkAgreement.checked
        const textareaValue = textArea.value
        const errorValidation = Array.from(formInputs).filter(input => input.value === '')

        formInputs.forEach(input => {
            if (input.value === '') input.classList.add("errorValidation")
            else input.classList.remove("errorValidation")
            
        })
        if (!agreementValue) checkText.classList.add("tomatoText")
        else checkText.classList.remove("tomatoText")

        if (errorValidation.length !== 0 || !agreementValue ) return false

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            data:
            { 
                name: nameValue, 
                phone: phoneValue,
                mail: mailValue, 
                agreementCheck: agreementValue,
                text: textareaValue,
            }
            })
            .done((response) => {
            alert("Ваша заявка успешно отправлена! В ближайшее время ожидайте звонка от нас");
            form.reset()
        });

    }
    form.onsubmit = (event) => submitForm(event)
})