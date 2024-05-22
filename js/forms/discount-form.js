$(document).ready(() => {
    const form = document.getElementById("discount-form__form")
    const formInputs = document.querySelectorAll(".discount-form__form-input")
    const inputName = document.getElementById("discount-form__form-input-name")
    const inputPhone = document.getElementById("discount-form__form-input-phone")
    const checkAgreement = document.getElementById("discount-form__chekbox-input")
    const checkText = document.getElementById("discount-form__chekbox-label")

    const submitForm = (event) => {
        event.preventDefault()

        const nameValue = inputName.value
        const phoneValue = inputPhone.value
        const agreementValue = checkAgreement.checked
        const errorValidation = Array.from(formInputs).filter(input => input.value === '')

        formInputs.forEach(input => {
            if (input.value === '') input.classList.add("errorValidation")
            else input.classList.remove("errorValidation")
            
        })
        if (!agreementValue) checkText.classList.add("tomatoText")
        else checkText.classList.remove("tomatoText")

        if (errorValidation.length !== 0 || !agreementValue) return false

        $.ajax({
            type: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            data:
            { 
                name: nameValue, 
                phone: phoneValue, 
                agreementCheck: agreementValue,
            }
            })
            .done((response) => {
            alert("Ваша заявка успешно отправлена! ");
            form.reset()
        });

    }
    form.onsubmit = (event) => submitForm(event)
})