const questionBank = [

    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answersArray: [
            { answer: '<script>', correct: true },  // Correct
            { answer: '<javascript>', correct: false },
            { answer: '<scripting>', correct: false },
            { answer: '<js>', correct: false }]
    },

    {// Updated 1/30/21
        question: 'How do you write "Hello World" in an alert box?',
        answersArray: [
            { answer: 'alert("Hello World")', correct: true }, // Correct
            { answer: 'alertbox("Hello World")', correct: false },
            { answer: 'msgBox("Hello World")', correct: false },
            { answer: 'msg("Hello World")', correct: false }]
    },

    { // Updated 1/30/21
        question: 'How do you creat a function in JavaScript?',
        answersArray: [
            { answer: 'function myFunction()', correct: true },  // Correct
            { answer: 'function = myFunction()', correct: false },
            { answer: 'function: myFunction()', correct: false },
            { answer: 'It is impossible', correct: false }]
    },

    {
        question: 'How do you add a comment in JavaScript?',
        answersArray: [
            { answer: '//this is a comment', correct: true },  // Correct
            { answer: '<!--this is a comment-->', correct: false },
            { answer: 'this is a comment', correct: false },
            { answer: '*/this is a comment', correct: false }]
    },

    {
        question: 'Which of the following is a comparison operator?',
        answersArray: [
            { answer: '!==', correct: true },  // Correct
            { answer: '=', correct: false },
            { answer: '+=', correct: false },
            { answer: '--', correct: false }]
    }

];

function shuffleQB() {
    // clone questionBank
    let questionBankClone = questionBank;
    // For each question, shuffle answer order
    for (let i = 0; i < questionBankClone.length; i++) {

        let answersArray = questionBankClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    // Shuffle question order
    questionBankClone = questionBankClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionBankClone;
};