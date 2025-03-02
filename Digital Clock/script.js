function display(){
    let time = new Date()
    let hour = time.getHours()
    let minutes = zero(time.getMinutes())
    let seconds = zero(time.getSeconds())

    if(hour>12){
        hour -=12
        document.getElementById('ampm').innerHTML = 'PM'
    }

    document.getElementById('hr').innerHTML = zero(hour)
    document.getElementById('min').innerHTML = minutes
    document.getElementById('sec').innerHTML = seconds
}

setInterval(display,500)

function zero(num){
    return num<10?'0'+num:num
}
