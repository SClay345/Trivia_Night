document.getElementById("question").addEventListener('click', getRandom)
document.getElementById("show").addEventListener('click', show)
document.getElementById("p1Correct").addEventListener('click', p1ScoreUp)
document.getElementById("p1Wrong").addEventListener('click', p1ScoreDown)
document.getElementById("p2Correct").addEventListener('click', p2ScoreUp)
document.getElementById("p2Wrong").addEventListener('click', p2ScoreDown)

let p1Score = 0
let p2Score = 0
let value = 0
document.getElementById("p1").innerText = p1Score
document.getElementById("p2").innerText = p2Score

const url = "https://jservice.io/api/random"
function getRandom(){
    hide()
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let answer = data[0].answer
        let points = document.getElementById("value")
        document.getElementById("questionText").innerText = data[0].question
        document.getElementById("answer").innerText = data[0].answer
        document.getElementById("category").innerText = data[0].category.title
        points.innerText = data[0].value
        value = data[0].value
        document.getElementById('question').innerText = "Get Next Question"
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }



    function show(){
        document.getElementById("answer").classList.remove("hidden")
    }

    function hide(){
        document.getElementById("answer").classList.add("hidden")
    }

    function p1ScoreUp(){
        if(value === 0){
            return
        } 
        p1Score += value
        document.getElementById("p1").innerText = p1Score
    }
    function p1ScoreDown(){
        if(value === 0){
            return
        } 
        p1Score -= value
        document.getElementById("p1").innerText = p1Score
    }

    function p2ScoreUp(){
        if(value === 0){
            return
        } 
        p2Score += value
        document.getElementById("p2").innerText = p2Score
    }
    function p2ScoreDown(){
        if(value === 0){
            return
        } 
        p2Score -= value
        document.getElementById("p2").innerText = p2Score
    }