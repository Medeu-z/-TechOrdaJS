function readLine() {
    return inputString[currentLine++];
}
function factorial(n){
   if(n === 1){
       return n;
   }else if(n >= 2){
       return n * factorial(n-1);
   }
}

function main(n) {
    console.log(factorial(n));
}

main(4);