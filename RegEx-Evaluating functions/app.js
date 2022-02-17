let re;
re= /hello/
re= /hello/i; //i = case insensitive
// re= /hello/g; //global search

// console.log(re)
// console.log(re.source);


//exec() -Return result in an array or null
const result = re.exec('hello world');

console.log(result)
console.log(result[0])
console.log(result.index)


//test() - Returns true or false
const test = re.test('Hello');
console.log(test)


//match() -Return resu;t array or null

const string ='Hello There'
const result2 =string.match(re);
console.log(result2)


//search() - Return index of first4
// match if not found returns -1

const string1= "Hello There"
const result3= string1.search(re)
console.log(result3)

//replace() - Return new string with some or all matches of a patter
const str='Hello There';
const newStr =str.replace(re, 'Hi');
console.log(newStr)