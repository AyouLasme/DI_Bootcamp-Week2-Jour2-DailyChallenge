// Exercice Daily Challenge

let sentence = "the clothes you bought are not bad"
wordNot = sentence.indexOf("not")
console.log(wordNot)
wordBad = sentence.indexOf("bad")
console.log(wordBad)
if(wordBad > wordNot){
    str = sentence.replace(sentence.substring(wordNot, wordBad +3), "good")
    console.log(str)
}else{
    console.log(str)
}
