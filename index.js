window.onload = (e) => {
    document.querySelector(".email-form").reset()
}

const handleValueChange = () => {
    let input_data = document.querySelector(".email-input").value
    let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    let error_icon = document.querySelector(".error")
    let error_message = document.querySelector(".error-message")


    if(input_data !== "") {
        if(input_data.match(email_regex) === null) {
            error_icon.classList.add("error-active")
            error_message.classList.add("error-active")
        }
        else if(input_data.value === "") {
            error_icon.classList.remove("error-active")
            error_message.classList.remove("error-active")
        }
        else {
            error_icon.classList.remove("error-active")
            error_message.classList.remove("error-active")
        }
    }
    else {
        error_icon.classList.add("error-active")
        error_message.classList.add("error-active")
    }
    
}