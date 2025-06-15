/**
 Exercício 1: 
 Sistema de Notificações Contexto: Crie um sistema onde diferentes 
 serviços (e-mail, SMS, push) enviam notificações.

Tarefas:
Crie uma classe abstrata Notificacao com um método abstrato enviar().
Implemente classes concretas: EmailNotificacao, SMSNotificacao, PushNotificacao.
Use polimorfismo para enviar todas as notificações de uma lista.
 */

// 1. Crie uma classe abstrata Notificacao com um método abstrato enviar().
abstract class Notificacao {
    abstract enviar(destinatario: string, mensagem: string): void;
}

// 2. Implemente classes concretas: EmailNotificacao, SMSNotificacao, PushNotificacao.

class EmailNotificacao extends Notificacao {
    enviar(destinatario: string, mensagem: string): void {
      console.log(`Enviando e-mail para ${destinatario}: "${mensagem}"`);
      // lógica real de envio de e-mail
    }
  }

  class SMSNotificacao extends Notificacao {
    enviar(destinatario: string, mensagem: string): void {
      console.log(`Enviando SMS para ${destinatario}: "${mensagem}"`);
      // Aqui você adicionaria a lógica real de envio de SMS
    }
  }
  
  class PushNotificacao extends Notificacao {
    enviar(destinatario: string, mensagem: string): void {
      console.log(`Enviando notificação push para ${destinatario}: "${mensagem}"`);
      // Aqui você adicionaria a lógica real de envio de push
    }
  }
  
  // 3. Use polimorfismo para enviar todas as notificações de uma lista.
  
  // Criando instâncias das classes de notificação
  const emailNotificacao = new EmailNotificacao();
  const smsNotificacao = new SMSNotificacao();
  const pushNotificacao = new PushNotificacao();
  
  // Criando uma lista de notificações (usando o tipo base Notificacao)
  const listaDeNotificacoes: Notificacao[] = [
    emailNotificacao,
    smsNotificacao,
    pushNotificacao,
  ];
  
  // Definindo destinatário e mensagem
  const destinatarioExemplo = "usuario@example.com ou (xx) xxxxx-xxxx ou ID_DO_DISPOSITIVO";
  const mensagemExemplo = "Sua encomenda foi despachada!";
  
  console.log("--- Enviando Notificações ---");
  
  // Iterando sobre a lista e chamando o método enviar() em cada notificação
  // O polimorfismo permite que chamemos o método 'enviar' sem nos preocuparmos
  // com o tipo concreto da notificação em cada iteração.
  listaDeNotificacoes.forEach((notificacao) => {
    notificacao.enviar(destinatarioExemplo, mensagemExemplo);
  });
  
  console.log("--- Notificações Enviadas ---");