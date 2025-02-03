const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.result')

    if (height === "" || height < 0 || isNaN(height)){results.innerHTML = "enter a valid height"}
    else if (weight === "" || weight < 0 || isNaN(weight)){results.innerHTML = "enter a valid width"}
    else {
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>your BMI is ${BMI}</span>`
    }
})