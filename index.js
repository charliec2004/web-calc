

const buttons = {}; // creating a 'dictionary' of buttons to access easy later!
for (let i = 0; i <= 9; i++) {
    buttons[i] = document.getElementById(i.toString());
}

buttons['+'] = document.getElementById('+');
buttons['-'] = document.getElementById('-');
buttons['X'] = document.getElementById('X');
buttons['/'] = document.getElementById('/');
buttons['.'] = document.getElementById('.');
buttons['='] = document.getElementById('=');
buttons['AC'] = document.getElementById('AC');

// Function to safely evaluate the expression
// Using Math.js to prevent code injection
function safeEvaluate(expression) {
    try {
        // Replace 'X' with '*' if needed
        const processedExpression = expression.toString().replace(/X/g, '*'); //expression literal with 'g' flag to replace all instances of 'X' not just first
        // Safely evaluate using Math.js
        return math.evaluate(processedExpression); // easy peasy
    } catch (error) { // neva gonna happen
        console.error("Calculation error:", error);
        return "Error";
    }
}

let currentInput = ''; // stores what the user types
const displayText = document.getElementById('result'); // Target the child div with styles

// Loop through all the buttons we set up earlier
for (let key in buttons) {
    buttons[key].addEventListener('click', () => {
        const value = key; // setting the each key to value for readability
        // functionality for =
        if (value === '=') {
            try {
                // Evaluate the current expression and show result
                const result = safeEvaluate(currentInput); // TODO: FIX unsafe EVAL prone to code injection
                displayText.textContent = result; // Update the styled child element
                currentInput = result;
                console.log(currentInput);
            } catch (err) {
                console.log(err, '= didnt work');
                displayText.textContent = 'Error';
                currentInput = '';
            }
        } else if (value === 'AC') {
            // Clear everything
            currentInput = '';
            displayText.textContent = ''; // Clear the styled child element
            console.log(currentInput);
        } else if (value === 'X') {
            currentInput += '*';
            displayText.textContent = currentInput;
            console.log(currentInput);
        } else if (value === '.') {
            currentInput += '.';
            console.log(currentInput);
            displayText.textContent = currentInput;
        } else {
            // Add pressed button value to the input and update screen
            currentInput += value;
            displayText.textContent = currentInput; // Update the styled child element
            console.log(currentInput);
        }
    });
}

