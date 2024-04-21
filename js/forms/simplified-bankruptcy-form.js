$(document).ready(() => {
    const form = document.getElementById("simplified-bankruptcy__form")
    const formInputs = document.querySelectorAll(".simplified-bankruptcy__input")
    const inputName = document.getElementById("simplified-bankruptcy__form-input-name")
    const inputPhone = document.getElementById("simplified-bankruptcy__form-input-phone")
    const checkAgreement = document.getElementById("simplified-bankruptcy__form-chekbox-input")
    const checkText = document.getElementById("simplified-bankruptcy__chekbox-label")

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
            alert("Ваша заявка успешно отправлена! В ближайшее время ожидайте звонка от нас");
            form.reset()
        });

    }
    form.onsubmit = (event) => submitForm(event)
})