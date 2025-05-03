console.log("Orientacao a objetos em ts");
// npx tsc --init
// npx tsc --watch
var User = /** @class */ (function () {
    function User(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    return User;
}());
var UserVander = new User("Vanderlei", 49, true);
//console.log(UserVander)
console.log("Nome: ".concat(UserVander.name));
console.log("Idade: ".concat(UserVander.age));
console.log("Ativo: ".concat(UserVander.active));
console.log("--------------------------------------------------");
var UserAmarilis = new User("Amarilis", 49, false);
//console.log(UserAmarilis)
UserVander.name = "Franco";
console.log("Nome: ".concat(UserVander.name));
