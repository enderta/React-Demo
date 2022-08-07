// Write a function that: Takes one number n as a parameter Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3 You should use a while loop

function addNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

function addNumbers2(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Each person write down their first name. Write it out like this S A L L Y and number the letters with a zero-indexed count like this 0 1 2 3 4.
// Now pick a letter of the alphabet, any letter, and make up a rule for your partner to say, do, or act out. You could make them meow like a cat, or draw a picture, or anything (fun and nice).
// The first player, speak your rule - say "For each letter of your name, if that letter is $letterYouChose, do $ruleYouInvented."
// The second player, hold up your name and act out the for of loop.

function speakRule(name, letter, rule) {
    let result = '';
    for (let char of name) {
        if (char === letter) {
            result = rule;
            break;
        } else {
            result += char;
        }
    }
    return result;
 
}

console.log(speakRule('SALLY', 'A', 'meow'));
