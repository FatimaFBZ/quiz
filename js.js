
var quiz = [
    {
        q: ' what is your favorite color ?',
        option: ['pink', 'blue', 'purple', 'green'],
        answer: 'pink',
    },
    {
        q: ' what day do you like to go hospital ?',
        option: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        answer: 'Monday',
    },
    {
        q: ' where do you live ?',
        option: ['USA', 'Morocco', 'Japan', 'India'],
        answer: 'USA',
    },
    {
        q: ' what is you favorite sport?',
        option: ['soccer', 'swin', 'tennis', 'running'],
        answer: 'soccer',
    },
    {
        q: ' what time do you wake up ?',
        option: ['6am', '7am', '8 am', '9am'],
        answer: '6am',
    },
]

var myIndex = 0;
var score = 0;

function displayQuiz() {
    document.getElementById('title').innerHTML = quiz[myIndex].q,
    document.getElementById('choice').innerHTML = ''
    document.getElementById('submit').innerHTML= score;
    

    for (let i = 0; i < quiz[myIndex].option.length; i++) {
        var button = document.createElement('button')
        button.innerHTML = quiz[myIndex].option[i]

        button.addEventListener('click', handleClick)
        button.setAttribute('name', quiz[myIndex].option[i])
        document.getElementById('choice').appendChild(button)

    }

    
 
}

displayQuiz()

function handleClick(event) {
    console.log("you got clicked", event.target.name)
    console.log("answer for this question",quiz[myIndex].answer)
    if(event.target.name === quiz[myIndex].answer){
        console.log("you got it right")
        score++
    }
    myIndex++
    if (myIndex >= quiz.length) {
        alert('the quiz is over')
    } else {

        displayQuiz()
    }
   

    //displayQuiz()
}



displayQuiz();

/*for(var i=0; i <quiz.length; i++){
    var response = window.prompt(quiz[i].prompt);
    if(response==quiz[i].answer){
        score++;
        alert("correct");
    }else{
        alert("wrong");
    }
}
alert("you got:"+score+"/"+quiz.length);*/









/*var score=0;

function checkAnswer(){
    var response = answer;
        
        for (let i = 0; i<answer; i++) {
           
            response=quiz[myIndex].answer
           
        }if( response == answer ){
        console.log("right")
        score++
        }else{
            console.log('wrong')
        }


        checkAnswer()
    }
        
 
    checkAnswer();*/



/*var button= document.getElementById('#save')
var highScoreButton=document.getElementById(showHighScore)
button.addEventListener('click', function(){
    console.log('u got clicked', document.getElementById('initials').value);
    localStorage.setItem(document.getElementById('initials').value,score)

})


highScoreButton.addEventListener('click', function(){
    console.log("u got clicked highscore")
    for (var key in localStorage ){
        console.log('each person initials', key)
        console.log('Their score', localStorage[key])
        console.log('type of thinng??', typeof localStorage[key])
        if(typeof localStorage[key]==='string'){
            var h2El = document.createElement('p')
            h2El.innerHTML= "Name:" + key+ 'score: '+ localStorage[key]
        document.getElementById('highscore').appendChild(h2El)    
        }
    }
})*/











var timeEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
    "the end of the quiz, time is up.";

var words = message.split(' ');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {

            timeEl.textContent = timeLeft + 'seconds remaining.';
            timeLeft--;
        } else if (timeLeft === 1) {
            timeEl.textContent = timeLeft + 'seconds remaining';
            timeLeft--;
        } else {
            timeEl.textContent = '';
            clearInterval(timeInterval);

            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    var wordCount = 0;
    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}

countdown();



