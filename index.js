function getAnswer(number1, number2, typeOfMath1) {
  if (typeOfMath1 === '+') {
    return number1 + number2
  }
  if (typeOfMath1 === '-') {
    return number1 - number2
  }
  if (typeOfMath1 === '/') {
    return number1 / number2
  }
  if (typeOfMath1 === '*') {
    return number1 * number2
  }
}

function problemHTML(numberArray,typeOfMath1) {
  let htmlHTML = '';

  htmlHTML += `
  <div class='problem'>
  <p class='first'>${numberArray[0]}</p>
  <p class='second'>${typeOfMath1}</p>
  <p class='third'>${numberArray[1]}</p>
  <div class='fourth'><hr></div>
  <input class='answer' type='number'>
  <button type='button' class='check_answer' >Check Answer</button>
  <input class='divAnswer' type='hidden' value='${numberArray[2]}'>
  </div>
  `
  return htmlHTML
}

function generateNumbers(typeOfMath1, typeOfMath2) {
  let x = 0;
  if (typeOfMath2 === 'oneDigit') {
    x += 1;
  } else if (typeOfMath2 === 'twoDigit') {
    x += 11;
  } else if (typeOfMath2 === 'threeDigit') {
    x += 111;
  }
  let numberArray = [];
  let number1 = Math.floor((Math.random() * 9 * x) + 1);
  let number2 = Math.floor((Math.random() * 9 * x) + 1);
  let answer = getAnswer(number1, number2, typeOfMath1);
  console.log(answer);
  if (number1 >= number2) {
    numberArray.push(number1);
    numberArray.push(number2);
    numberArray.push(answer);

  } else {
    numberArray.push(number2);
    numberArray.push(number1);
    numberArray.push(answer);
  }
  return numberArray
}


function generateProblems(typeOfMath1, typeOfMath2,typeOfMath3) {

  let numberArray = [];
  let html = '';
  for (let i = 0; i < typeOfMath3; i++) {
    numberArray = generateNumbers(typeOfMath1, typeOfMath2);
    html += problemHTML(numberArray, typeOfMath1);
  }
  $('#problems').html(html);
}

function createMath() {
  $('#search').on('click', function () {
    event.preventDefault();
    console.log('createMath Function is working')

    const typeOfMath1 = ($('input[name=type]:checked', '#myForm').val());
    const typeOfMath2 = ($('input[name=digits]:checked', '#myForm').val());
    const typeOfMath3 = ($('#howManyProblems').val());
    console.log(typeOfMath1);
    console.log(typeOfMath2);
    console.log(typeOfMath3);
    generateProblems(typeOfMath1, typeOfMath2,typeOfMath3);
  })
}

function checkAnswer() {
  $('#problems').on('click', '.check_answer', function () {
    event.preventDefault();
    let userAnswer = $(this).parent().find('.answer').val();
    let correctAnswer = $(this).parent().find('.divAnswer').val();
    let userGrade = validateAnswer(userAnswer, correctAnswer);
    if (userGrade === true) {
      $(this).parent().css('color', 'green');
    } else {
      $(this).parent().css('color', 'red');
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




$(checkAnswer);
$(createMath);
