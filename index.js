var readLineSync=require('readline-sync')
var chalk=require('chalk')

var score=0
function play(question,answer){

    var userAnswer=readLineSync.question(question)
    console.log("You entered "+userAnswer)
    
    if(userAnswer===answer){
        console.log("You are right")
        score+=1
    }else{
        console.log("You are wrong")
        score-=1
    }
    console.log("Score:"+score)
}

qustions=[
    {
        question:"Where do I live?",
        answer:"Solapur"
    },
    {
        question:"What is my favourite food?",
        answer:"Pav Bhaji"
    },
    {
    question:"What is my favourite color?",
    answer:"black"
},
{
    question:"Who is my favourite superstar?",
    answer:"Mahesh Babu"
},{
    question:"what I like most?",
    answer:"Spending time with family"
}]
var userName=readLineSync.question("What is your Name?")
var today = new Date()
var cur = today.getHours()

if (cur < 12) {
  console.log('good morning'+userName)
} else if (cur < 18) {
  console.log('good afternoon'+userName)
} else {
  console.log('good evening'+userName)
}

for(var i=0;i<qustions.length;i++){
    play(qustions[i].question,qustions[i].answer)
}
