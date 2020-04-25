let answerSheet = [];

function getAnswer(number1, number2) {
  return number1 + number2
}

function problemHTML(number1, number2, answer, i) {
  answerSheet.push({
    [i]: answer
  });
  return `

  <div class='problem'>
  <p class='first'>${number1}</p>
  <p class='second'>+</p>
  <p class='third'>${number2}</p>
  <div class='fourth'><hr></div>
  <input class='answer ${i}' type='number'>
  <button type='button' class='check_answer ${i}' >Check Answer</button>
  <input class='divAnswer' type='hidden' value='${answer}'>
  </div>
  `
}


function generateHTML1() {
  let stringHTML = '';

  for (let i = 0; i < 2; i++) {
    let number1 = Math.floor((Math.random() * 20) + 1);
    let number2 = Math.floor((Math.random() * 20) + 1);
    let answer = getAnswer(number1, number2);
    if (number1 >= number2) {
      stringHTML += problemHTML(number1, number2, answer, i)
    } else {
      stringHTML += problemHTML(number2, number1, answer, i)
    }

  }
  $('#problems').html(stringHTML);
  console.log(answerSheet);
}


function generateProblems(userRequest) {
  let HTML = '';
  console.log('generateProblems is working')
  if (userRequest === 'grade1') {
    console.log('grade one is working')
    HTML += generateHTML1();
  }
  if (userRequest === 'grade2') {
    HTML += generateHTML2();
  }
  if (userRequest === 'grade3') {
    HTML += generateHTML3();
  }

}

function createMath() {
  $('#search').on('click', function () {
    event.preventDefault();
    console.log('createMath Function is working')
    const userRequest = 'grade1'
    generateProblems(userRequest);
  })
}

function checkAnswer2() {
  $('#problems').on('click', '.check_answer', function () {
    event.preventDefault();
    let userAnswer = $(this).parent().find('.answer').val();
    let correctAnswer = $(this).parent().find('.divAnswer').val();
    let userGrade = validateAnswer(userAnswer, correctAnswer);
    if (userGrade === true) {
      $(this).parent().css('color','black');
    } 
    else{
      $(this).parent().css('color','red');
    }
  })
};


function validateAnswer(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    console.log('right');
    return true;
  }
  if (userAnswer != correctAnswer) {
    console.log('wrong');
    return false;
  };
};




$(checkAnswer2);
// $(checkAnswer);
$(createMath);