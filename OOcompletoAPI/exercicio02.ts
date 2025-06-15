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

// 1. Crie uma interface Autenticavel com o método autenticar().
interface Autenticavel {
    autenticar(): boolean;
  }
  
  // 2. Implemente classes: LoginSenha, LoginBiometria, LoginToken.
  
  class LoginSenha implements Autenticavel {
    private usuario: string;
    private senhaDigitada: string;
    private senhaCorreta: string; // Senha real para comparação
  
    constructor(usuario: string, senhaDigitada: string, senhaCorreta: string) {
      this.usuario = usuario;
      this.senhaDigitada = senhaDigitada;
      this.senhaCorreta = senhaCorreta;
    }
  
    autenticar(): boolean {
      console.log(`Tentando autenticar usuário '${this.usuario}' com senha...`);
      if (this.senhaDigitada === this.senhaCorreta) {
        console.log("Autenticação por senha bem-sucedida!");
        return true;
      } else {
        console.log("Falha na autenticação por senha: Senha incorreta.");
        return false;
      }
    }
  }
  
  class LoginBiometria implements Autenticavel {
    private digitaisCorretas: boolean; // Simula se as digitais correspondem
  
    constructor(digitaisCorretas: boolean) {
      this.digitaisCorretas = digitaisCorretas;
    }
  
    autenticar(): boolean {
      console.log("Tentando autenticar por biometria...");
      if (this.digitaisCorretas) {
        console.log("Autenticação por biometria bem-sucedida!");
        return true;
      } else {
        console.log("Falha na autenticação por biometria: Digitais não correspondem.");
        return false;
      }
    }
  }
  
  class LoginToken implements Autenticavel {
    private tokenDigitado: string;
    private tokenValido: string; // Token real para comparação
  
    constructor(tokenDigitado: string, tokenValido: string) {
      this.tokenDigitado = tokenDigitado;
      this.tokenValido = tokenValido;
    }
  
    autenticar(): boolean {
      console.log("Tentando autenticar por token...");
      // Em um cenário real, você verificaria a validade, expiração e integridade do token
      if (this.tokenDigitado === this.tokenValido && this.tokenDigitado !== "") {
        console.log("Autenticação por token bem-sucedida!");
        return true;
      } else {
        console.log("Falha na autenticação por token: Token inválido ou vazio.");
        return false;
      }
    }
  }
  
  // 3. Teste com um array de Autenticavel[].
  
  // Criando instâncias das classes de autenticação
  const loginSenhaCorreto = new LoginSenha("admin", "12345", "12345");
  const loginSenhaIncorreto = new LoginSenha("user", "senhaerrada", "minhasenha");
  const loginBiometriaSucesso = new LoginBiometria(true);
  const loginBiometriaFalha = new LoginBiometria(false);
  const loginTokenValido = new LoginToken("XYZ123ABC", "XYZ123ABC");
  const loginTokenInvalido = new LoginToken("INVALIDO456", "ABCDEF789");
  
  // Criando um array de objetos que implementam a interface Autenticavel
  const metodosDeAutenticacao: Autenticavel[] = [
    loginSenhaCorreto,
    loginSenhaIncorreto,
    loginBiometriaSucesso,
    loginBiometriaFalha,
    loginTokenValido,
    loginTokenInvalido,
  ];
  
  console.log("--- Iniciando Testes de Autenticação ---");
  
  // Iterando sobre o array e chamando o método autenticar() em cada objeto
  metodosDeAutenticacao.forEach((metodo, index) => {
    console.log(`\nTeste de Autenticação #${index + 1}:`);
    const resultado = metodo.autenticar();
    console.log(`Resultado da autenticação: ${resultado ? "SUCESSO" : "FALHA"}`);
  });
  
  console.log("\n--- Testes de Autenticação Concluídos ---");