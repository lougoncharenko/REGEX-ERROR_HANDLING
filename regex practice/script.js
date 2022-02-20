//using the test method
let testStr= "The dog chased the cat"
let regex=/dog/
let result= regex.test(testStr);
console.log(result)

let re=/dog/
let str="The dog chased the cat"

//create function for testing
function regexTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
        //console.log('True)

    }else{
        console.log(`${str} does not match ${re.source}`)
        //console.log("False")
    }
}

regexTest(re, str);

//practice
let myString = "Hello, World!";
let myRegex = /Hello/;
result = myRegex.test(myString); 
console.log(result)


//match literal strings
testStr = "Hello, my name is Kevin.";
testRegex = /Kevin/;
let outcome=testRegex.test(testStr);
console.log(outcome)

//practice
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
result = waldoRegex.test(waldoIsHiding);
console.log(result)


//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex= /dog|cat|bird|fish/
result=petRegex.test(petString)
console.log(result)


//ignore case while matching
let newString='freecodecamp'
let fccRegex=/Code/i
result=fccRegex.test(newString);
console.log(result);


//Extract Matches
let hello='Hello, World'.match(/Hello/);
console.log(hello)
let ourString= 'Regular Expressions';
let ourRegex= /Expressions/;
let match=ourString.match(ourRegex);
console.log(match)

//practice
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex=/Extract/;
result=extractStr.match(codingRegex);
console.log(result)


//Find More Than the First Match
testStr="Repeat, Repeat, Repeat";
testRegex= /Repeat/g;
result=testStr.match(testRegex);
console.log(result)

//practice
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
 result = twinkleStar.match(starRegex); 
console.log(result)


//Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr))
console.log(huRegex.test(hugStr))


//Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex))
console.log(bagStr.match(bgRegex))
console.log(bugStr.match(bgRegex))
console.log(bogStr.match(bgRegex))

//practice
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."
let vowelRegex = /[aeiou]/gi;
result= quoteSample.match(vowelRegex)
console.log(result)


//Match Letters of the Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let agRegex = /[a-e]at/;
catStr.match(agRegex);
batStr.match(agRegex);
matStr.match(agRegex);

//practice
quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphaRegex= /[a-z]/gi
result=quoteSample.match(alphaRegex)
console.log(result)


//Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
myRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex));


//Match Single Characters Not Specified
quoteSample = "3 blind mice.";
myRegex = /[^a-z0-9]/gi; // Change this line
result = quoteSample.match(myRegex); 
console.log(result)


//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
myRegex = /s+/g; // Change this line
result = difficultSpelling.match(myRegex);
console.log(result)

//Match Characters that Occur Zero or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

//Match Beginning String Patterns
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
result=firstRegex.test(firstString);
console.log(result)
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));


//Match Ending String Patterns
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));


//practice
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
result = lastRegex.test(caboose);
console.log(result)


//Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);


//Match Everything But Letters and Numbers
shortHand = /\W/;
numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

//Match All Numbers\
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
result = movieName.match(numRegex).length;
console.log(result)


//match all non numbers short hand
movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // 
result = movieName.match(noNumRegex).length;


//match white space
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);



//Specify Only the Lower Number of Matches
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); //true
multipleA.test(A2);//false
multipleA.test(A100); //true

//practice
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
result = haRegex.test(haStr);


//check for all or nothing
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);


//positive and negative lookahead
/*
Lookaheads are patterns that tell 
JavaScript to look-ahead in your string 
to check for patterns further along. 
This can be useful when you want to 
search for multiple patterns over the same string.
*/

//positive lookahead(?=...)
//negative lookahead (?!=...)
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

//practice
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,}(?=\w*\d{2}))/; // Change this line
pwRegex.test(sampleWord);


//Check For Mixed Grouping of Characters
 myString = "Eleanor Roosevelt";
 myRegex = /(Eleanor|Franklin Roosevelt)/; // Change this line
result = myRegex.test(myString); 
console.log(result)

//reuse patterns using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
result = reRegex.test(repeatNum);


//Use Capture Groups to Search and Replace
let wrongText ="The sky is silver"
let silverRegex=/silver/
newText= wrongText.replace(silverRegex, 'blue')
console.log(newText)

str = "one two three";
let fixRegex=/(\w+)\s(\w+)\s(\w+)/
let replaceText= "three two one"
result=str.replace(fixRegex, replaceText)
console.log(result)



//Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "") 