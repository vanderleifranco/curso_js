/****
 Exercício 2: Autenticação de Usuários Contexto: Diferentes tipos de login (senha, biometria, token).

Tarefas:

Crie uma interface Autenticavel com o método autenticar().

Implemente classes: LoginSenha, LoginBiometria, LoginToken.

Teste com um array de Autenticavel[].

Dica:

interface Autenticavel {
  autenticar(): boolean;
}
 */
// 2. Implemente classes: LoginSenha, LoginBiometria, LoginToken.
var LoginSenha = /** @class */ (function () {
    function LoginSenha(usuario, senhaDigitada, senhaCorreta) {
        this.usuario = usuario;
        this.senhaDigitada = senhaDigitada;
        this.senhaCorreta = senhaCorreta;
    }
    LoginSenha.prototype.autenticar = function () {
        console.log("Tentando autenticar usu\u00E1rio '".concat(this.usuario, "' com senha..."));
        if (this.senhaDigitada === this.senhaCorreta) {
            console.log("Autenticação por senha bem-sucedida!");
            return true;
        }
        else {
            console.log("Falha na autenticação por senha: Senha incorreta.");
            return false;
        }
    };
    return LoginSenha;
}());
var LoginBiometria = /** @class */ (function () {
    function LoginBiometria(digitaisCorretas) {
        this.digitaisCorretas = digitaisCorretas;
    }
    LoginBiometria.prototype.autenticar = function () {
        console.log("Tentando autenticar por biometria...");
        if (this.digitaisCorretas) {
            console.log("Autenticação por biometria bem-sucedida!");
            return true;
        }
        else {
            console.log("Falha na autenticação por biometria: Digitais não correspondem.");
            return false;
        }
    };
    return LoginBiometria;
}());
var LoginToken = /** @class */ (function () {
    function LoginToken(tokenDigitado, tokenValido) {
        this.tokenDigitado = tokenDigitado;
        this.tokenValido = tokenValido;
    }
    LoginToken.prototype.autenticar = function () {
        console.log("Tentando autenticar por token...");
        // Em um cenário real, você verificaria a validade, expiração e integridade do token
        if (this.tokenDigitado === this.tokenValido && this.tokenDigitado !== "") {
            console.log("Autenticação por token bem-sucedida!");
            return true;
        }
        else {
            console.log("Falha na autenticação por token: Token inválido ou vazio.");
            return false;
        }
    };
    return LoginToken;
}());
// 3. Teste com um array de Autenticavel[].
// Criando instâncias das classes de autenticação
var loginSenhaCorreto = new LoginSenha("admin", "12345", "12345");
var loginSenhaIncorreto = new LoginSenha("user", "senhaerrada", "minhasenha");
var loginBiometriaSucesso = new LoginBiometria(true);
var loginBiometriaFalha = new LoginBiometria(false);
var loginTokenValido = new LoginToken("XYZ123ABC", "XYZ123ABC");
var loginTokenInvalido = new LoginToken("INVALIDO456", "ABCDEF789");
// Criando um array de objetos que implementam a interface Autenticavel
var metodosDeAutenticacao = [
    loginSenhaCorreto,
    loginSenhaIncorreto,
    loginBiometriaSucesso,
    loginBiometriaFalha,
    loginTokenValido,
    loginTokenInvalido,
];
console.log("--- Iniciando Testes de Autenticação ---");
// Iterando sobre o array e chamando o método autenticar() em cada objeto
metodosDeAutenticacao.forEach(function (metodo, index) {
    console.log("\nTeste de Autentica\u00E7\u00E3o #".concat(index + 1, ":"));
    var resultado = metodo.autenticar();
    console.log("Resultado da autentica\u00E7\u00E3o: ".concat(resultado ? "SUCESSO" : "FALHA"));
});
console.log("\n--- Testes de Autenticação Concluídos ---");
