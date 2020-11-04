const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOutout(operator, resultBeforeCalculation, calcNumber) {
    const calDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription);
}

function writeTolog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
}

function add() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutout('+', initialResult, enteredNumber);
    writeTolog('ADD', initialResult, enteredNumber, currentResult);
      
}



function subtract() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutout('-', initialResult, enteredNumber);
    writeTolog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutout('*', initialResult, enteredNumber); 
    writeTolog('DIVISION', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutout('/', initialResult, enteredNumber);
    writeTolog('DIVISION', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);