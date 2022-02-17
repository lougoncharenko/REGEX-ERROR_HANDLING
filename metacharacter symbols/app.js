let re;
//literal characters
re= /hello/;
re= /hello/i;

//metacharacter symbols
re =/^h/i;  //Must start with
re =/d$/i;  //Must end with
re =/world$/i;  //Must end with
re =/^hello$/ //must start and end with hello
re =/^h.llo$/i //matches any one character
re =/h*llo/i //matvhes any character 0 or more times
re =/gre?a?y/i //optional characters
//both e and a are optional in grey/gray
re =/gre?a?y\?/i  //escape character \ escapes 




//string to match
const str= "Grey";

//log results
const result= re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)

    }else{
        console.log(`${str} does not match ${re.source}`)
    }
}

reTest(re, str)