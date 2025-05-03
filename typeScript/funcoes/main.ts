// npx tsc --init
// https://www.digitalocean.com/community/tutorials/typescript-new-project

// npx tsc --watch

let x: number = 10
let y: number = 20
console.log("funcoes em ts")
function somar(a: number, b: number): number {
  return a + b
}

console.log(`${x} + ${y} = ${somar(x, y)}`)
