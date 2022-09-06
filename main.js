let questions = [
    {
        numb: 1,
        question: "What does HTML stands for ?",
        answer: "Hyper text markup language",
        options: [
            "Hyper text preprocessor",
            "Hyper text multiple language",
            "Hyper text markup language",
            "Hyper tool multi language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stands for ?",
        answer: "cascading style sheet",
        options: [
            "common style sheet",
            "colorful style sheet",
            "computer style sheet",
            "cascading style sheet"
        ]
    },
     {
         numb: 3,
         question: "Choose the correct HTML element for the largest heading ?",
         answer: "h1",
         options: [
             "h6",
             "h1",
             "head",
             "heading"
            
         ]
     },
     {
         numb: 4,
         question: "What is the correct HTML element for inserting a line break?",
         answer: "br",
         options: [
             "br",
             "bi",
             "Ib",
             "break"
         ]
     },
     {
         numb: 5,
         question: "Which HTML attribute is used to define inline styles?",
         answer: "style",
         options: [
             "styles",
             "class",
             "font",
             "style"
         ]
     },
     {
         numb: 6,
         question: "Which property is used to change the background color?",
         answer: "background-color",
         options: [
             "bgcolor",
             "background-color",
             "color",
             "bcolor"
         ]
     },
     {
         numb: 7,
         question: "Which property is used to change the font of an element?",
         answer: "font-family",
         options: [
             "font-style",
             "font-family",
             "font-width",
             "height-line"
         ]
     },
     {
         numb: 8,
         question: "Which property is used to change the left margin of an element?",
         answer: "margin-left",
         options: [
             "margin",
             "margin-left",
             "left",
             "index"
         ]
     },
     {
         numb: 9,
         question: "Inside which HTML element do we put the JavaScript?",
         answer: "script",
         options: [
             "Javascript",
             "scripting",
             "script",
             "js"
         ]
     },
     {
         numb: 10,
         question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
         answer: "script src= 'xxx.js'",
         options: [
             "script src= 'xxx.js'",
             "script href= 'xxx.js'",
             "script name= 'xxx.js'",
             "script source= 'xxx.js'"
            
         ]
     },
    {
        numb: 11,
        question: "The HTML tag use to style a particular part of a sentence is ?",
        answer: "span",
        options: [
            "span",
            "strong",
            "edit",
            "style"
        ]
    },
    {
        numb: 12,
        question: "DOM stands for what ?",
        answer: "document object model",
        options: [
            "document object model",
            "document object module",
            "document of model",
            "don't offset model"
        ]
    },
        {
            numb: 13,
            question: "How do you create a funcion in javascript?",
            answer: "funtion myFunction()",
            options: [
                "funtion = myFunction()",
                "funtion:myFunction()",
                "funtion myFunction()",
                "funtionmyFunction()"
            
            ]
        },
        {
            numb: 14,
            question: "How do you call a function named 'myFunction'",
            answer: "myFunction()",
            options: [
                "call myFunction()",
                "myFunction()",
                "call my function myFunction()",
                "hello myFunction()"
            ]
        },
        {
            numb: 15,
            question: "How to write a comment in javascript",
            answer: "//comment",
            options: [
                "//comment",
                "<--comment-->",
                "/*comment*/",
                "*/comment/*"
            ]
        }
]



const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const quiz_box = document.querySelector(".quiz-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const timeCount = document.querySelector(".timer .timer-sec");
const timeLine = document.querySelector("header .time-line");
const timeOff = document.querySelector("header .time-txt");

const option_list = document.querySelector(".option-list");

// if start quiz button click
start_btn.onclick = ()=>{
    info_box.classList.add("activeinfo");
}

//if exist button is clicked

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo");
}

//continue button clicked
continue_btn.onclick = ()=>{
    quiz_box.classList.add("activebox");
    info_box.classList.remove("activeinfo");
    showQuestions(0)
    queCount(1)
    startTimer(15)
    startTimerLine(0);
}

let que_count = 0;
let que_number = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = document.querySelector(".next-btn")
const result_box = document.querySelector(".result-box")
const restart_quiz = document.querySelector(".buttonss .restart")
const quit_quiz = document.querySelector(".buttonss .quit")

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activebox");
    result_box.classList.remove("activeresult-box");
    let que_count = 0;
    let que_number = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;  
    showQuestions (que_count);
    queCount(que_number);
    clearInterval(counter)
    startTimer(timeValue)
    clearInterval(counterLine)
    startTimerLine(widthValue)
    next_btn.style.display = "none"
    timeOff.textContent = "Time Left"

}
quit_quiz.onclick = ()=>{
    window.location.reload();
}

next_btn.onclick = () =>{
    if(que_count < questions.length -1){
        que_count++;
        que_number++;
        showQuestions (que_count);
        queCount(que_number);
        clearInterval(counter)
        startTimer(timeValue)
        clearInterval(counterLine)
        startTimerLine(widthValue)
        next_btn.style.display = "none"
        timeOff.textContent = "Time Left"

    }else{
        clearInterval(counter)
        clearInterval(counterLine)
        console.log("questions complete");
        showResultBox();
    }
}


function showQuestions (index){
    const que_text = document.querySelector(".que-txt");
    let que_tag = "<span>"+ questions[index].numb + " . " + questions[index].question +"</span>";
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i< option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}   

let tickicon = ' <div class="icon tick"><i class="fas fa-check"></i></div>';
let crossicon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOption = option_list.children.length;
    if (userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log("ans is correct");
        answer.insertAdjacentHTML("beforeend", tickicon);
    } else{
        answer.classList.add("incorrect")
        console.log("ans is wrong");
        answer.insertAdjacentHTML("beforeend", crossicon);
        
        for(let i = 0; i< allOption; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                
            }
        }
    }
    for(let i = 0; i < allOption; i++){
        option_list.children[i].classList.add("disabled")
    }
    next_btn.style.display = "block"
}
function showResultBox(){
    quiz_box.classList.remove("activebox");
    info_box.classList.remove("activeinfo");
    result_box.classList.add("activeresult-box");
    const scoreText = document.querySelector(".score-text");
    if(userScore > 10){
        let scoreTag = '<span>and Congrats!, You got <p>' + userScore +'</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 5){
        let scoreTag = '<span>and Nice, You got <p>' + userScore +'</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got <p>' + userScore +'</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "00"
            timeCount.textContent = "0" + addZero
        }
        if(time < 0 ){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off"

            let correctAns = questions[que_count].answer;
            let allOption = option_list.children.length;

            for(let i = 0; i< allOption; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                    
                }
            }
            for(let i = 0; i < allOption; i++){
                option_list.children[i].classList.add("disabled")
            }
            next_btn.style.display = "block"
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 31);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549 ){
            clearInterval(counterLine);
        }
       
    }
}




function queCount(index){
    const button_ques_counter = document.querySelector(".total-que");
    let totalQuestionTag = '<span><p>' + index +'</p>of<p>'+ questions.length +'</p>questions</span>'
    button_ques_counter.innerHTML = totalQuestionTag;
}