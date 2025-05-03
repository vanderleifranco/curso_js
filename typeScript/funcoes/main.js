"use strict";
// npx tsc --init
// https://www.digitalocean.com/community/tutorials/typescript-new-project
// npx tsc --watch
let x = 10;
let y = 20;
console.log("funcoes em ts");
function somar(a, b) {
    return a + b;
}
console.log(`${x} + ${y} = ${somar(x, y)}`);
