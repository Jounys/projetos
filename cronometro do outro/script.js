const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const millisecondsEl = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval 
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPause = false

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer(){
    interval = setInterval(()=>{
        if(!isPause){
            milliseconds += 10
            if(milliseconds === 1000){
                seconds++
                milliseconds = 0
            }

            if(minutes === 60){
                minutes++
                seconds = 0
            }
            minutesEl.textContent = formartTime(minutes)
            secondsEl.textContent = formartTime(seconds)
            millisecondsEl.textContent = formartMilliseconds(milliseconds)
        }

    }, 10) // Essa função vai ser chamada com o evento de click e depois vai ser executada a cada 10 milissegundos por causa da função setInterval()
    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pauseTimer(){
    isPause = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

function resumeTimer(){
    isPause = false
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function resetTimer(){
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0
    isPause = false
    minutesEl.textContent = formartTime(minutes)
    secondsEl.textContent = formartTime(seconds)
    millisecondsEl.textContent = formartMilliseconds(milliseconds)
    startBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'none'
}

function formartTime(time){
    return time < 10 ? `0${time}` : time;
}

function formartMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}