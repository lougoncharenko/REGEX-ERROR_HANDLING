const user={email:'jdoe@gmail.com'}

try{
    //produce a ReferenceError
// myFunction();

//produce a type error
// null.myFunc();

//will produce synthaxError
// console.log(eval('Hello World'));

//will produce a URIError
// decodeURIComponent('%')
if(!user.name){
    // throw 'User has no name'
    throw new SyntaxError('User has no name');
}

}catch(e){
console.log(`User Error: ${e.message}`);
}finally{
    console.log('Finally runs regardless of result...')
}

console.log('Program continues...')