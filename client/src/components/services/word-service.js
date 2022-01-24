import { wordApiUrl } from "./config";

let getWords = (correctLetters, knownLetters, incorrectLetters) => {
    let correctLettersString = '';
    let knownLettersString = knownLetters;
    let incorrectLettersString = incorrectLetters;

    for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] === '') {
            correctLettersString += '.';
        } else {
            correctLettersString += correctLetters[i];
        }
    }

    return new Promise( async (resolve, reject) => {
        await fetch(wordApiUrl + '/words?correctletters=' 
                  + correctLettersString.toUpperCase() 
                  + '&knownletters=' + knownLettersString.toUpperCase()
                  + '&incorrectletters=' + incorrectLettersString.toUpperCase())
            .then((res) => res.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            }
        );
    });
}

export default getWords;