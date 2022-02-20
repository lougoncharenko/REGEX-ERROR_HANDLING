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

