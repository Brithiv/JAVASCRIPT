let button = document.querySelector('#btn')
let colorText = document.querySelector('#colorText')
let wrap = document.getElementById('wrap')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function radomHexValue(){
    let randomIndex = Math.floor(Math.random()*hex.length)
    return hex[randomIndex]
}


button.addEventListener('click',function (){
    let hexColor = '#'
    for(let i=1;i<=6;i++){
        hexColor +=radomHexValue()
    }
    wrap.style.backgroundColor = hexColor
    colorText.innerHTML = hexColor
})


