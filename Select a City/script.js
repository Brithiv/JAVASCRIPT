let resultDiv = document.createElement('div')
resultDiv.id = 'result'
document.getElementById('wrapper').appendChild(resultDiv)

const button = document.querySelector('button')
button.addEventListener('click', displayStart)

function displayStart (){

    const input = document.querySelector('#input')
    const city = input.options[input.selectedIndex].value

    let population = 0, language = '', literacyRate = 0
    switch (city){
        case 'Bengalure':
            population = 3543543
            language = 'Kannada'
            literacyRate = 88.71
            break

        case 'Chennai' :
            population = 4385408
            language = 'Tamil'
            literacyRate = 81.32
            break

        case 'Madurai':
            population = 993243
            language = 'Tamil'
            literacyRate = 93.84
            break
    }

    let msg = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and LiteracyRate is ${literacyRate}%`

    document.getElementById('result').innerHTML = msg
}
