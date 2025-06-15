/**
 Exercício 1:
 Sistema de Notificações Contexto: Crie um sistema onde diferentes
 serviços (e-mail, SMS, push) enviam notificações.

Tarefas:
Crie uma classe abstrata Notificacao com um método abstrato enviar().
Implemente classes concretas: EmailNotificacao, SMSNotificacao, PushNotificacao.
Use polimorfismo para enviar todas as notificações de uma lista.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Crie uma classe abstrata Notificacao com um método abstrato enviar().
var Notificacao = /** @class */ (function () {
    function Notificacao() {
    }
    return Notificacao;
}());
// 2. Implemente classes concretas: EmailNotificacao, SMSNotificacao, PushNotificacao.
var EmailNotificacao = /** @class */ (function (_super) {
    __extends(EmailNotificacao, _super);
    function EmailNotificacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotificacao.prototype.enviar = function (destinatario, mensagem) {
        console.log("Enviando e-mail para ".concat(destinatario, ": \"").concat(mensagem, "\""));
        // lógica real de envio de e-mail
    };
    return EmailNotificacao;
}(Notificacao));
var SMSNotificacao = /** @class */ (function (_super) {
    __extends(SMSNotificacao, _super);
    function SMSNotificacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotificacao.prototype.enviar = function (destinatario, mensagem) {
        console.log("Enviando SMS para ".concat(destinatario, ": \"").concat(mensagem, "\""));
        // Aqui você adicionaria a lógica real de envio de SMS
    };
    return SMSNotificacao;
}(Notificacao));
var PushNotificacao = /** @class */ (function (_super) {
    __extends(PushNotificacao, _super);
    function PushNotificacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushNotificacao.prototype.enviar = function (destinatario, mensagem) {
        console.log("Enviando notifica\u00E7\u00E3o push para ".concat(destinatario, ": \"").concat(mensagem, "\""));
        // Aqui você adicionaria a lógica real de envio de push
    };
    return PushNotificacao;
}(Notificacao));
// 3. Use polimorfismo para enviar todas as notificações de uma lista.
// Criando instâncias das classes de notificação
var emailNotificacao = new EmailNotificacao();
var smsNotificacao = new SMSNotificacao();
var pushNotificacao = new PushNotificacao();
// Criando uma lista de notificações (usando o tipo base Notificacao)
var listaDeNotificacoes = [
    emailNotificacao,
    smsNotificacao,
    pushNotificacao,
];
// Definindo destinatário e mensagem
var destinatarioExemplo = "usuario@example.com ou (xx) xxxxx-xxxx ou ID_DO_DISPOSITIVO";
var mensagemExemplo = "Sua encomenda foi despachada!";
console.log("--- Enviando Notificações ---");
// Iterando sobre a lista e chamando o método enviar() em cada notificação
// O polimorfismo permite que chamemos o método 'enviar' sem nos preocuparmos
// com o tipo concreto da notificação em cada iteração.
listaDeNotificacoes.forEach(function (notificacao) {
    notificacao.enviar(destinatarioExemplo, mensagemExemplo);
});
console.log("--- Notificações Enviadas ---");
