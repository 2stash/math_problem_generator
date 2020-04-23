



function getAnswer(number1,number2){
  return number1 + number2
}

function problemHTML(number1,number2,answer,i){
  return`

  <div class='problem'>
  <p class='first'>${number1}</p>
  <p class='second'>+</p>
  <p class='third'>${number2}</p>
  <div class='fourth'><hr></div>
  <input class='answer ${i}' type='number'>
  <button type='button' class='check_answer ${i}' val='${answer}'>Check Answer</button>
  <input class='divAnswer hidden' val='${answer}'>
  </div>
  `
}


function generateHTML1(){
  let stringHTML = '';

  for(let i = 0; i< 2;i++){
    let number1 = Math.floor((Math.random() * 20) + 1);
    let number2 = Math.floor((Math.random() * 20) + 1);
    let answer = getAnswer(number1,number2);
    stringHTML += problemHTML(number1,number2,answer,i)
  }
  $('#problems').html(stringHTML);

}


function generateProblems(userRequest){
  let HTML = '';
  console.log('generateProblems is working')
  if(userRequest==='grade1'){
    console.log('grade one is working')
    HTML += generateHTML1();
  }
  if(userRequest==='grade2'){
    HTML += generateHTML2();
  }
  if(userRequest==='grade3'){
    HTML += generateHTML3();
  }
  generateHTML1(HTML);
}

function createMath(){
  $('#search').on('click', function(){
    event.preventDefault();
  console.log('createMath Function is working')
  const userRequest = 'grade1'
  generateProblems(userRequest);
})
}

function checkAnswer(){

    $('#problems').on('click','.check_answer', function(){
    event.preventDefault();
    console.log(event.currentTarget);
    let userAnswer = $('.answer').val();
    let correctAnswer = $('.divAnswer').val();
    console.log(correctAnswer);
    console.log(userAnswer);

  })
}



$(checkAnswer);
$(createMath);