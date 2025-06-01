Exercício 1: Sistema de Notificações
Contexto:
Crie um sistema onde diferentes serviços (e-mail, SMS, push) enviam notificações.

Tarefas:

Crie uma classe abstrata Notificacao com um método abstrato enviar().

Implemente classes concretas: EmailNotificacao, SMSNotificacao, PushNotificacao.

Use polimorfismo para enviar todas as notificações de uma lista.

Dica:

```typescript
abstract class Notificacao {
  abstract enviar(destinatario: string): void;
}
```

cício 2: Autenticação de Usuários
Contexto:
Diferentes tipos de login (senha, biometria, token).

Tarefas:

Crie uma interface Autenticavel com o método autenticar().

Implemente classes: LoginSenha, LoginBiometria, LoginToken.

Teste com um array de Autenticavel[].

Dica:

```typescript
interface Autenticavel {
  autenticar(): boolean;
}
```

Exercício 3: Processador de Pagamentos
Contexto:
Sistema que processa pagamentos (cartão, PIX, boleto).

Tarefas:

Crie uma classe abstrata Pagamento com métodos abstratos processar() e estornar().

Implemente classes: PagamentoCartao, PagamentoPIX, PagamentoBoleto.

Use polimorfismo para processar uma lista de pagamentos.

Dica:

```typescript
abstract class Pagamento {
  abstract processar(valor: number): void;
}
```

Exercício 4: Gerenciador de Tarefas
Contexto:
Tarefas pessoais (simples, urgente, recorrente).

Tarefas:

Crie uma interface Priorizavel com o método definirPrioridade().

Implemente classes: TarefaSimples, TarefaUrgente (com prioridade), TarefaRecorrente.

Adicione uma classe abstrata Tarefa com método comum exibirDetalhes().

Dica:

```typescript
interface Priorizavel {
  prioridade: number;
}
```
Exercício 5: Sistema de Arquivos
Contexto:
Manipular arquivos (documento, imagem, vídeo).

Tarefas:

Crie uma interface Salvavel com métodos salvar() e carregar().

Implemente classes: ArquivoDocumento, ArquivoImagem, ArquivoVideo.

Use uma classe abstrata Arquivo para compartilhar propriedades como nome e tamanho.

Dica:

```typescript
abstract class Arquivo {
  constructor(public nome: string) {}
}
```
