//naming variables by IDs
let first = document.querySelector('#first')
let middle = document.querySelector('#middle')
let last = document.querySelector('#last')
let stop = document.querySelector('.press').addEventListener('click', clickToStop)
let score = 0

let intervalID

//functions for spinning button
function clickToSpin(){
 spin1 = setInterval(clickToSpin2, 80)
 spin2 = setInterval(clickToSpin3, 80)
 spin3 = setInterval(clickToSpin4, 80)

}

//spin function for #first
function clickToSpin2(){
    let valuable = Math.ceil(Math.random() * 7)
    if(valuable === 1){
        first.className = 'cristiano'
    }else if(valuable === 2){
        first.className = 'neymar'
    }else if(valuable === 3){
        first.className = 'arda'
    }else if(valuable === 4){
        first.className = 'messi'
    }else if(valuable === 5){
        first.className = 'salah'
    }else if(valuable === 6){
        first.className = 'mbappe'
    }else if(valuable === 7){
        first.className = 'vini'
    }
    
}
//spin function for #middle
function clickToSpin3(){
    let valuable = Math.ceil(Math.random() * 7)
    if(valuable === 1){
        middle.className = 'cristiano'
    }else if(valuable === 2){
        middle.className = 'neymar'
    }else if(valuable === 3){
        middle.className = 'arda'
    }else if(valuable === 4){
        middle.className = 'messi'
    }else if(valuable === 5){
        middle.className = 'salah'
    }else if(valuable === 6){
        middle.className = 'mbappe'
    }else if(valuable === 7){
        middle.className = 'vini'
    }
}
//spin function for #last
function clickToSpin4(){
    let valuable = Math.ceil(Math.random() * 7)
    if(valuable === 1){
        last.className = 'cristiano'
    }else if(valuable === 2){
        last.className = 'neymar'
    }else if(valuable === 3){
        last.className = 'arda'
    }else if(valuable === 4){
        last.className = 'messi'
    }else if(valuable === 5){
        last.className = 'salah'
    }else if(valuable === 6){
        last.className = 'mbappe'
    }else if(valuable === 7){
        last.className = 'vini'
    }
}
//stop function

function clickToStop(){
    clearInterval(spin1);
    clearInterval(spin2);
    clearInterval(spin3); 
    allThree();
}
//function to add scores and a message once a stop button is clicked
function allThree(){
     if(first.className === middle.className && middle.className === last.className){
        score = score + 5;
        console.log(score)
        document.getElementById('message').textContent = `Congratulations! 🥳`;

    }else if(first.className === middle.className || first.className === last.className || middle.className === last.className){
        score = score + 2;
        console.log(score)
        document.getElementById('message').textContent = `Good!👍`;
    }else if(first.className !== middle.className !== last.className){
        score = score;
        document.getElementById('message').textContent = 'Try Again!😜';
    }
    document.querySelector('#placeToSee').innerHTML = score
}
//function to clear score back to 0 when clicked
function clearScore(){
  document.querySelector('#placeToSee').innerHTML = 0
  document.querySelector('#message').textContent = "";
}

