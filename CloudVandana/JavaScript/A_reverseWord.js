const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to reverse a word
function reverseWord(word) {
    return word.split('').reverse().join('');
}

// Function to reverse every word in a sentence
function reverseSentenceWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(reverseWord);
    return reversedWords.join(' ');
}

// Take user input for a sentence
rl.question('Enter a sentence: ', (inputSentence) => {
    const reversedSentence = reverseSentenceWords(inputSentence);
    console.log("Reversed Sentence:", reversedSentence);

   
    });
