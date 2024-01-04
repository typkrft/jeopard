function capitalize(str) {
    var firstLetter = str.slice(0,1)
    var restOfWord = str.slice(1)

    firstLetter = firstLetter.toUpperCase() // B
    restOfWord = restOfWord.toLowerCase()  // randon

    var fullWord = firstLetter + restOfWord

    console.log(fullWord)
} 
