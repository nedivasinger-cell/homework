'use strict';



function multiply(a,b){
    return a* b;
}
console.log(multiply(2,3));
console.log(multiply(4,5));

function getMultiplier(){
return multiply;
    }
const m1 = getMultiplier();

console.log(m1(6,7));
console.log(m1(8,9));

function getMultiplier2(x){
   return function(y){
    multiply(x,y);
   }
}
const m2 = getMultiplier2(2);
console.log(m2(3));
console.log(m2(4));


function every1(arr,callback){
    for(let i=0; i<arr.length; i++){
        if(!callback(arr[i])){
            return false;
        }
    }
    return true;
}
const arr = ["a","b","c","d"];
function capital(str){
    return str === str.toUpperCase();
}
console.log(every1(arr,capital));

function some1(arr,callback){
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            return true;
        }
    }
    return false;
}
const arr2 = ["a","b","c","d"];
function capital2(str){
    return str === str.toUpperCase();
}
console.log(some1(arr2,capital2));

