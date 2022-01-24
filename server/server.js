const fs = require('fs');
const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());

const port = process.env.port || 4000;
let wordsTxtFile = fs.readFileSync('words.txt', 'utf-8').split(' ');

function wordContains(word, letters) {
    let count = false;

    for (let i = 0; i < letters.length; i++) {
        if (word.includes(letters[i])) {
            count = true
        }
    }

    return count;
}

//Returns list of words based on provided headers: known letters and/or known letters that are in correct spot
async function getWords(correctLetters, knownLetters, incorrectLetters) {
    let possibleWords = [];
    let numCorrectTotal = 0;

    for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] != '') {
            numCorrectTotal++;
        }
    }

    if (numCorrectTotal > 0) {
        for (let word = 0; word < wordsTxtFile.length; word++) {
            let numCheck = numCorrectTotal;
            currentWord = wordsTxtFile[word];

            if (!wordContains(currentWord, incorrectLetters)) {
                for (let char = 0; char < currentWord.length; char++) {
                    if (currentWord[char] == correctLetters[char]) {
                        numCheck--;
                    }
                }
    
                if (numCheck <= 0) {
                    if (knownLetters) {
                        let knownCheck = knownLetters.length;
                        let checkedLetters = [];
    
                        for (let char = 0; char < knownLetters.length; char++) {
                            if (currentWord.includes(knownLetters[char]) && !checkedLetters.includes(knownLetters[char])) {
                                knownCheck--;
                                checkedLetters.push(knownLetters[char]);
                            }
                        }
    
                        if (knownCheck <= 0) {
                            possibleWords.push(currentWord);
                        }
                    } else {
                        possibleWords.push(currentWord);
                    }
                }
            }
        }
    } else {
        if (knownLetters) {
            for (let word = 0; word < wordsTxtFile.length; word++) {
                let currentWord = wordsTxtFile[word];
                let knownCheck = knownLetters.length;
                let checkedLetters = [];

                if (!wordContains(currentWord, incorrectLetters)) {
                    for (let char = 0; char < knownLetters.length; char++) {
                        if (currentWord.includes(knownLetters[char]) && !checkedLetters.includes(knownLetters[char])) {
                            knownCheck--;
                            checkedLetters.push(knownLetters[char]);
                        }
                    }

                    if (knownCheck <= 0) {
                        possibleWords.push(currentWord);
                    }
                }
            }
        }
    }

    if (possibleWords) {
        return possibleWords;
    } else {
        return wordsTxtFile;
    }
}

app.get('/words', async (req, res) => {
    const correctLetters = req.query.correctletters.split('');
    const knownLetters = req.query.knownletters.split('');
    const incorrectLetters = req.query.incorrectletters.split('');

    for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] == '.') {
            correctLetters[i] = '';
        }
    }

    let words = await getWords(correctLetters, knownLetters, incorrectLetters);

    if (words.length > 0) {
        res.status(200).send(words);
    } else {
        res.status(200).send(["No words found"]);
    } 
});

app.listen(port, () => {
    console.log("Server started");
});