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

//brackets [] -character sets
re = /gr[ae]y/i;  //must be an A or E
re = /[GF]ray/i  //must be a G or F uppercase
re = /[^GF]ray/i  //match anything except a G or F
re = /^[GF]ray/i //different from previous one
re = /[A-Z]ray/;  //mathes any uppercase letter
re = /[a-z]ray/; //matches any lowercase letter
re = /[0-9]/;  //match any digit

//braces {} -quantifiers
re =/Hel{2}o/i   //must occur exaclt {m} amount of times
re =/Hel{2,4}o/i //occurs btween 2-4 times
re =/Hel{2,}o/i    //must occur at least {m} times

//parenthese( ) - Grouping
re=/([0-9]x){3}/ //matches str= "3x3x3xHelllo";

//short hand character classes
re = /\w/;  //word character-alphanumberic or _
re = /\w+/  //+ = one or more
re = /\W/   //non-word characters like !, _, =,
re= /\d/;   //match any digit
re= /\d+/;   //match any digit

//string to match
const str= "3x3x3xHelllo";

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