//ASSIGNMENT 5: NEW FUNCTIONS
function max(n1,n2){
    return n1 >= n2 ? n1 : n2;
}
console.log("Expected output of max(5,8) is 8  " + myFunctionTest(8, function () {
    return max(5,8);
}));
console.assert(max(5,8)===8,"error in (2)");


function maxOfThree(n1,n2,n3){
    aux = n1 >= n2 ? n1 : n2;
    return aux >= n3 ? aux : n3;
}
console.log("Expected output of maxOfThree(5,8,6) is 8  " + myFunctionTest(8, function () {
    return maxOfThree(5,8,6);
}));
console.assert(maxOfThree(5,9,6)===9,"error in (3)");


function isVowel(c){
    if(c.length != 1) return false;
    ret = false;
    letter = c.charCodeAt(0);
    vowels = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
    vowels.forEach(vowel => {
        if(vowel == letter) ret = true;
    });
    return ret;
}
console.log("Expected output of isVowel('O') is true  " + myFunctionTest(true, function () {
    return isVowel('O');
}));
console.assert(isVowel('v')===false,"error in (4)");

function sum(arr){
    result = 0;
    arr.forEach(i => {
        result += i;
    });
    return result;
}
console.log("(Expected output of sum([7,2,3,4]) is 16  " + myFunctionTest(16, function () {
    return sum([7,2,3,4]);
}));
console.assert(sum([7,2,3,4])===16,"error in (5.a)");


function multiply(arr){
    result = 1;
    arr.forEach(i => {
        result *= i;
    });
    return result;
}
console.log("(Expected output of multiply([7,2,3,4]) is 168 " + myFunctionTest(168, function () {
    return multiply([7,2,3,4]);
}));
console.assert(multiply([7,2,3,4])===168,"error in (5.b)");


function reverse(str){
    result = "";
    for(let i=str.length-1; i>=0; i--){
        result += str.charAt(i);
    }
    return result;
}
console.log("Expected output of reverse('nada de nada') is 'adan ed adan' " + myFunctionTest("adan ed adan", function () {
    return reverse('nada de nada');
}));
console.assert(reverse('hello world')==='dlrow olleh',"error in (6)");


function findLongestWord(arr){
    result = -1;
    arr.forEach(w => {
        if(w.length > result) result = w.length;
    });
    return result;
}
console.log("Expected output of findLongestWord(['dog','elephant','jack','house']) is 8 " + myFunctionTest(8, function () {
    return findLongestWord(['dog','elephant','jack','house']);
}));
console.assert(findLongestWord(['dog','japan','computers','horses'])===9,"error in (7)");


function filterLongWords(arr, i){
    result = [];
    index = 0;
    arr.forEach(w => {
        if(w.length > i){
            result[index] = w;
            index++;
        }
    });
    return result;
}
console.log("(Expected output of filterLongWords(['dog','elephant','jack','house'], 4) is elephant,house " + myFunctionTest('elephant,house', function(){
    return filterLongWords(['dog','elephant','jack','house'],4);
}));
console.assert(filterLongWords(['dog','elephant','jack','house'], 4).toString()===["elephant","house"].toString(),"error in (8)");

const a = [1,3,5,3,3];
const b = a.map( e => e*10 );
const c = a.filter( e => e==3 );
const d = a.reduce( function(acc, currVal){ return acc * currVal} );
console.log("    original:    "+a);
console.log("    mapping *10: "+b);
console.log("        Expected output of mapping is 10,30,50,30,30  " + myFunctionTest([10,30,50,30,30], function () {
    const aux = a.map( e => e*10 );
    return aux;
}));
console.assert(b.toString()===[10,30,50,30,30].toString());

console.log("    filter ==3:  "+c);
console.log("        Expected output of filter is 3,3,3  " + myFunctionTest([3,3,3], function () {
    const aux = a.filter( e => e==3 );
    return aux;
}));
console.assert(c.toString()===[3,3,3].toString());

console.log("    reduce *:    "+d);
console.log("        Expected output of reduce is 135  " + myFunctionTest(135, function () {
    const aux = a.reduce( function(acc, currVal){ return acc * currVal} );
    return aux;
}));
console.assert(d===135);


function printFibo(number,n1,n2){
    let nextTerm,count =0;

    console.log('Fibonacci Series:');
    console.log(n1); 
    count++;
    console.log(n2); 
    count++;
    nextTerm = n1 + n2;
    while (count < number) {
        console.log(nextTerm);
        count++;
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}
console.log(printFibo(5,0,1));

