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

// Fonction pour obtenir une liste de caractères à partir du texte
function getLatinCharacterList(text) {
    return text.split("") // Split en tableau pour chaque caractère
}

// Fonction pour traduire un caractère en morse
function translateLatinCharacter(character) {
    return latinToMorse[character.toUpperCase()] || " " // Utiliser le morse pour chaque caractère
}

// Fonction pour encoder le texte en morse
function encode(string) {
    let characterList = getLatinCharacterList(string) // Divise le texte en caractères
    let morseList = characterList.map(character => {
        return translateLatinCharacter(character) || " " // Convertir chaque caractère en morse
    })
    return morseList.join(" ") // Joindre les caractères morse avec un espace entre eux
}

// Fonction pour décoder le morse en texte
function decode(morseString) {
    let words = morseString.split(" / ") // Divise le morse en mots (séparés par "/")
    let decodedWords = words.map(word => {
        let letters = word.split(" ") // Divise chaque mot morse en lettres
        let decodedLetters = letters.map(letter => {
            return morseToLatin[letter] || "" // Décoder chaque lettre en texte
        })
        return decodedLetters.join("") // Joindre les lettres pour former un mot
    })
    return decodedWords.join(" ") // Joindre les mots en texte avec un espace
}

// Fonction pour traduire le texte en morse
function translateToMorse() {
    const text = document.getElementById("textInput").value // Récupère le texte de l'utilisateur
    const morse = encode(text) // Encode en morse
    document.getElementById("output").textContent = morse // Affiche le résultat
}

// Fonction pour traduire le morse en texte
function translateToText() {
    const morse = document.getElementById("morseInput").value // Récupère le morse de l'utilisateur
    const text = decode(morse) // Décode en texte
    document.getElementById("output").textContent = text // Affiche le résultat
}

// Ajouter des gestionnaires d'événements pour les boutons
document.getElementById("translateToMorseBtn").addEventListener("click", translateToMorse)
document.getElementById("translateToTextBtn").addEventListener("click", translateToText)
