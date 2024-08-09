const config = {
    problemElem: document.querySelector("#problem"),
    answerPromptElem: document.querySelector(".answer-prompt"),
    answerElem: document.querySelector(".answer"),
    dropDownElem: document.querySelector("#mode-select"),

    problemOptions: {
        "Two-digit addition": twoDigitAddition,
        "Three-digit addition": twoDigitAddition
    }
}

initDropDown()

function initDropDown() {
    for (let [optionName, optionHandler] of Object.entries(config.problemOptions))
        config.dropDownElem.add(new Option(optionName, optionHandler.toString()));
}

// define dropbox handler
// define all the problems according to dropbox

let problems = defineProblems();
let currentProblemIdx = -1;

updateProblem();
enableInputValidation();

function defineProblems() {
    let m = twoDigitAddition();
    return shuffle(m);
}


function updateProblem() {
    config.answerPromptElem.value = "";
    let currProblem = problems[++currentProblemIdx];
    config.problemElem.textContent = currProblem.problem + " =";
    config.answerElem.textContent = currProblem.solution
}

function enableInputValidation() {
    config.answerPromptElem.addEventListener("input", d => {
        if (config.answerPromptElem.value == problems[currentProblemIdx].solution) {
            config.answerPromptElem.value = "";
            updateProblem()
        }
    })
}