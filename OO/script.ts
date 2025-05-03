console.log("Orientacao a objetos em ts")
// npx tsc --init
// npx tsc --watch

class User {
    name: string
    age: number
    active: boolean
    constructor(name: string, age: number, active: boolean) {
        this.name = name
        this.age = age
        this.active = active
    }
}

const UserVander = new User("Vanderlei", 49, true)

//console.log(UserVander)

console.log(`Nome: ${UserVander.name}`)
console.log(`Idade: ${UserVander.age}`)
console.log(`Ativo: ${UserVander.active}`)
console.log("--------------------------------------------------")

const UserAmarilis = new User("Amarilis", 49, false)

//console.log(UserAmarilis)


UserVander.name = "Franco"

console.log(`Nome: ${UserVander.name}`)

