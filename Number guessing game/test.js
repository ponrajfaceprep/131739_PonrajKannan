
// random number
let guess = Math.floor((Math.random()*100)+1)
let count = 0
let game_status = 1

console.log(guess)
const hints = document.getElementById('hint')
const attempts = document.getElementById('attempt')

function check(){
  if(game_status == 1){
    let val = document.forms[0]['val'].value
    count++

    console.log(val)

    if(val == guess){
      hints.innerHTML = 'Guess is correct'
      attempts.innerHTML = 'Attempts : ' + count
      game_status = 0
      document.getElementById('check_btn').innerHTML = 'Reset'
    }
    else if(val < guess){
      hints.innerHTML = 'Guess is lower'
      attempts.innerHTML = 'Attempts : ' + count
    }
    else{
      hints.innerHTML = 'Guess is higher'
      attempts.innerHTML = 'Attempts : ' + count
    }
  }
  else{
    reset()
    game_status = 1
  }
} 

function reset(){
  document.getElementById('check_btn').innerHTML = 'Change'
  guess = Math.floor((Math.random()*100)+1)
  console.log(guess)
  count = 0
  attempts.innerHTML = 'Attempts : ' + count
  const obj = document.getElementsByTagName('input')
  obj[0].value = null
  hints.innerHTML = 'Try it'
}

