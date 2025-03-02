const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    
    if (!validateInputs()){
        e.preventDefault()
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true

    if (usernameVal === ''){
        success = false
        setError(username,"Username is required")
    }
    else{
        setSuccess(username)
    }
        
    if (emailVal === ''){
        success = false
        setError(email,'Email is required')
    }
    else if (!valid(emailVal)){
        success = false
        setError(email,'Please enter the valid email')
    }
    else{
        setSuccess(email)
    }
        
    if (passwordVal === ''){
        success = false
        setError(password,'Password is required')
    }
    else if (passwordVal.length<8){
        success = false
        setError(password,'Password must be atleast 8 character long')
    }
    else{
        setSuccess(password)
    }
        
    if (cpasswordVal === ''){
        success = false
        setError(cpassword,'Confirm Password is required')
    }
    else if (cpasswordVal != passwordVal){
        success = false
        setError(cpassword,'Password and Confirm Password must be same')
    }
    else{
        setSuccess(cpassword)
    }

    return success
        
}

function setError(element, msg){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = msg
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = ''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}