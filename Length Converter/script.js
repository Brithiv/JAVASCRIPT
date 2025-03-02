function convert(){
    let num = Number(document.getElementById("input").value)
    let inches = num/2.54
    let result = document.getElementById("result")
    result.innerHTML = inches.toFixed(2) + " "+ "Inches"
}