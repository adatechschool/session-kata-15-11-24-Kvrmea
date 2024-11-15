const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

/* let characterList = ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]
resultat attendu */

// Fonction qui prend en paramètre du texte et retourne un tableau de chaque caractère
function getLatinCharacterList(text) {
    return text.split("")
}

// Test de la fonction 
let result = getLatinCharacterList("Hello, world")
console.log(result)

// Fonction qui prend un paramètre un caractère et renvoie sa correspondance en morse
function translateLatinCharacter(character) {
    return latinToMorse[character.toUpperCase()] || null
}

// Test de la fonction avec "A"
let morseResult = translateLatinCharacter("A")
console.log(morseResult)

// Fonction qui prend un texte et retourne son équivalent en morse
function encode(string) {
    // Appel fonction getLatinCharacterList à chaque caractère et retourne le résultat en morse
    let characterList = getLatinCharacterList(string)

    // Applique la fonction translateLatinCharacter à chaque caractère et retourne le résultat en morse
    let morseList = characterList.map(character => {
        return translateLatinCharacter(character) || " "
    })

    // Join les éléments de morse avec un espace pour les séparer
    return morseList.join(" ")
}

// Test de la fonction 
let encodeString = encode("Hello, world")
console.log(encodeString)

// fonction qui prend du morse pour retourner l'équivalent en chaîne de caractère 
function decode() {
    // Divise la chaîne de morse en mots
    let words = morseString.split(" / ")

    // Décode chaque mot séparément
    let decodeWords = words.map(word => {
        let letters = word.split(" ")

        // décode chaque lettre en morse et obtenir son caractère correspondant
        let decodeLetters = letters.map(letter => {
            return morseToLatin[letter] || ""
        })
        // Join les lettres pour former un mot
        return decodeLetters.join("")
    })
    // Join les mots avec un espace
    return decodeWords.join(" ")
}

// Test de la fonction
let morseString = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
let decodeString = decode(morseString)
console.log(decodeString)