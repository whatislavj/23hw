// task1
function verifyKey(object, key) {
    return object.hasOwnProperty(key)
}

const obj = {
    name: "Alex",
    age: 23,
    city: "Chisinau"
}

console.log(verifyKey(obj, 'city')) // aici afiseaza true
// task2
console.log(verifyKey(obj, 'job')) // aici afiseaza false


// task3
function countVowels(text) {
    text = text.toLowerCase();
    const vocale = "aeiou";
    let countVowels = 0;

    for (let i = 0; i < text.length; i++) {
        if (vocale.includes(text[i])) {
            countVowels++;
        }
    }

    return countVowels;
}

const text1 = "Salut, ma numesc Maria.";
console.log('Numărul de vocale din șir:', countVowels(text1));


// task4
function clasifyStudents(studentsMarks) {
    const clasifiedStudents = {};

    for (const name in studentsMarks) {
        if (studentsMarks.hasOwnProperty(name)) {
            const marks = studentsMarks[name];

            const sumMarks = marks.reduce((acc, nota) => acc + nota, 0);
            const med = sumMarks / marks.length;

            const clasificare = `Medie: ${med.toFixed(2)}`;

            clasifiedStudents[name] = clasificare;
        }
    }

    return clasifiedStudents;
}

const studentMarks = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7],
};

const clasifiedStudents = clasifyStudents(studentMarks);
console.log(clasifiedStudents);

// task5
const text2 = 'Hello world!'
function reverseString(str) {
    let revStr = str.split('').reverse().join('')
    return revStr
}
console.log(reverseString(text2))

// task6
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

const input = 'level';
const isPalindrome1 = isPalindrome(input);
console.log(isPalindrome1);


// task7
function findBestMatch(k, arr) {
    if (arr.length === 0) {
        return null;
    }

    let closestNum = arr[0];
    let closestDist = Math.abs(k - arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let currentDist = Math.abs(k - arr[i]);
        if (currentDist < closestDist) {
            closestNum = arr[i];
            closestDist = currentDist;
        }
    }

    return closestNum;
}

const k = 3;
const arr = [5, 8, 12, 3, 10];
const result = findBestMatch(k, arr);
console.log("Cel mai apropiat număr este:", result);
