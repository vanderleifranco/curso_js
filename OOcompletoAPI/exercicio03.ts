/*
Exercício 3: Processador de Pagamentos Contexto: Sistema que processa pagamentos (cartão, PIX, boleto).

Tarefas:

Crie uma classe abstrata Pagamento com métodos abstratos processar() e estornar().

Implemente classes: PagamentoCartao, PagamentoPIX, PagamentoBoleto.

Use polimorfismo para processar uma lista de pagamentos.

Dica:

abstract class Pagamento {
  abstract processar(valor: number): void;
}

*/

// 1. Crie uma classe abstrata Pagamento com métodos abstratos processar() e estornar().
abstract class Pagamento {
    protected idTransacao: string;
    protected status: 'pendente' | 'processado' | 'estornado' | 'falhou';
  
    constructor() {
      this.idTransacao = this.gerarIdTransacao();
      this.status = 'pendente';
    }
  
    // Método abstrato para processar o pagamento
    abstract processar(valor: number): void;
  
    // Método abstrato para estornar o pagamento
    abstract estornar(): void;
  
    // Método auxiliar para gerar um ID de transação (simulação)
    protected gerarIdTransacao(): string {
      return 'TRANS_' + Math.random().toString(36).substring(2, 11).toUpperCase();
    }
  
    // Método para obter o status da transação
    public getStatus(): string {
      return this.status;
    }
  
    // Método para obter o ID da transação
    public getIdTransacao(): string {
      return this.idTransacao;
    }
  }
  
  // 2. Implemente classes: PagamentoCartao, PagamentoPIX, PagamentoBoleto.
  
  class PagamentoCartao extends Pagamento {
    private numeroCartao: string;
    private validade: string;
    private cvv: string;
  
    constructor(numeroCartao: string, validade: string, cvv: string) {
      super(); // Chama o construtor da classe abstrata Pagamento
      this.numeroCartao = numeroCartao;
      this.validade = validade;
      this.cvv = cvv;
    }
  
    processar(valor: number): void {
      console.log(`\n--- Processando Pagamento por Cartão (${this.idTransacao}) ---`);
      console.log(`Valor: R$ ${valor.toFixed(2)}`);
      console.log(`Cartão: **** **** **** ${this.numeroCartao.slice(-4)}`);
      // Simulação de lógica de processamento de cartão:
      // - Chamada a uma API de gateway de pagamento
      // - Verificação de validade, saldo, etc.
      if (Math.random() > 0.1) { // 90% de chance de sucesso
        this.status = 'processado';
        console.log("Pagamento por Cartão processado com sucesso!");
      } else {
        this.status = 'falhou';
        console.log("Falha ao processar pagamento por Cartão.");
      }
      console.log(`Status atual: ${this.status}`);
    }
  
    estornar(): void {
      console.log(`\n--- Estornando Pagamento por Cartão (${this.idTransacao}) ---`);
      if (this.status === 'processado') {
        // Simulação de lógica de estorno de cartão:
        // - Chamada a uma API de gateway de pagamento para estorno
        this.status = 'estornado';
        console.log("Estorno de Pagamento por Cartão realizado com sucesso!");
      } else if (this.status === 'estornado') {
        console.log("Pagamento por Cartão já estava estornado.");
      } else {
        console.log("Não é possível estornar um pagamento por Cartão que não foi processado ou falhou.");
      }
      console.log(`Status atual: ${this.status}`);
    }
  }
  
  class PagamentoPIX extends Pagamento {
    private chavePIX: string;
  
    constructor(chavePIX: string) {
      super();
      this.chavePIX = chavePIX;
    }
  
    processar(valor: number): void {
      console.log(`\n--- Processando Pagamento por PIX (${this.idTransacao}) ---`);
      console.log(`Valor: R$ ${valor.toFixed(2)}`);
      console.log(`Chave PIX: ${this.chavePIX}`);
      // Simulação de lógica de processamento PIX:
      // - Geração de QR Code ou código copia e cola
      // - Monitoramento da confirmação do pagamento
      if (Math.random() > 0.05) { // 95% de chance de sucesso
        this.status = 'processado';
        console.log("Pagamento por PIX processado com sucesso!");
      } else {
        this.status = 'falhou';
        console.log("Falha ao processar pagamento por PIX.");
      }
      console.log(`Status atual: ${this.status}`);
    }
  
    estornar(): void {
      console.log(`\n--- Estornando Pagamento por PIX (${this.idTransacao}) ---`);
      if (this.status === 'processado') {
        // Simulação de lógica de estorno PIX:
        // - Chamada a API do Banco Central ou provedor de PIX para devolução
        this.status = 'estornado';
        console.log("Estorno de Pagamento por PIX realizado com sucesso!");
      } else if (this.status === 'estornado') {
        console.log("Pagamento por PIX já estava estornado.");
      } else {
        console.log("Não é possível estornar um pagamento por PIX que não foi processado ou falhou.");
      }
      console.log(`Status atual: ${this.status}`);
    }
  }
  
  class PagamentoBoleto extends Pagamento {
    private linhaDigitavel: string;
  
    constructor() {
      super();
      this.linhaDigitavel = this.gerarLinhaDigitavel(); // Simula a geração da linha digitável
    }
  
    private gerarLinhaDigitavel(): string {
      // Simulação de geração de linha digitável de boleto
      return `34191.00008 00000.000000 00000.000000 9 00000000000000`;
    }
  
    processar(valor: number): void {
      console.log(`\n--- Processando Pagamento por Boleto (${this.idTransacao}) ---`);
      console.log(`Valor: R$ ${valor.toFixed(2)}`);
      console.log(`Linha Digitável: ${this.linhaDigitavel}`);
      // Simulação de lógica de processamento de boleto:
      // - O boleto é gerado e o cliente o paga
      // - O sistema aguarda a compensação bancária (dias úteis)
      // Para simplificar, simulamos um sucesso imediato
      if (Math.random() > 0.3) { // 70% de chance de "compensar"
        this.status = 'processado';
        console.log("Pagamento por Boleto processado/compensado com sucesso!");
      } else {
        this.status = 'falhou';
        console.log("Falha ao processar pagamento por Boleto (não compensado a tempo).");
      }
      console.log(`Status atual: ${this.status}`);
    }
  
    estornar(): void {
      console.log(`\n--- Estornando Pagamento por Boleto (${this.idTransacao}) ---`);
      if (this.status === 'processado') {
        // Estorno de boleto é mais complexo na vida real (crédito em conta do cliente)
        this.status = 'estornado';
        console.log("Estorno de Pagamento por Boleto solicitado e em processamento (crédito em conta do cliente).");
      } else if (this.status === 'estornado') {
        console.log("Pagamento por Boleto já estava estornado.");
      } else {
        console.log("Não é possível estornar um pagamento por Boleto que não foi processado ou falhou.");
      }
      console.log(`Status atual: ${this.status}`);
    }
  }
  
  // 3. Use polimorfismo para processar uma lista de pagamentos.
  
  // Criando instâncias de diferentes tipos de pagamento
  const pagamentoCartao1 = new PagamentoCartao("4444555566667777", "12/28", "123");
  const pagamentoPIX1 = new PagamentoPIX("email@example.com");
  const pagamentoBoleto1 = new PagamentoBoleto();
  const pagamentoCartao2 = new PagamentoCartao("1111222233334444", "05/25", "456"); // Simula um cartão que pode falhar
  const pagamentoPIX2 = new PagamentoPIX("999.888.777-66");
  
  // Criando uma lista de pagamentos (usando o tipo base Pagamento)
  const listaDePagamentos: Pagamento[] = [
    pagamentoCartao1,
    pagamentoPIX1,
    pagamentoBoleto1,
    pagamentoCartao2,
    pagamentoPIX2,
  ];
  
  console.log("===============================================");
  console.log("           Iniciando Processamento de Pagamentos           ");
  console.log("===============================================");
  
  const valorExemplo = 150.75;
  
  // Processar cada pagamento na lista
  listaDePagamentos.forEach((pagamento, index) => {
    console.log(`\n--- Iteração ${index + 1} ---`);
    pagamento.processar(valorExemplo);
  });
  
  console.log("\n===============================================");
  console.log("           Iniciando Processamento de Estornos           ");
  console.log("===============================================");
  
  // Estornar alguns pagamentos (ex: o primeiro e o segundo)
  listaDePagamentos.forEach((pagamento, index) => {
      // Vamos tentar estornar apenas os que foram processados com sucesso
      if (pagamento.getStatus() === 'processado') {
          pagamento.estornar();
      } else {
          console.log(`\nNão é possível estornar o pagamento ${pagamento.getIdTransacao()} (status: ${pagamento.getStatus()}).`);
      }
  });
  
  console.log("\n===============================================");
  console.log("           Verificando Status Finais           ");
  console.log("===============================================");
  
  listaDePagamentos.forEach((pagamento, index) => {
    console.log(`Pagamento #${index + 1} (ID: ${pagamento.getIdTransacao()}): Status Final: ${pagamento.getStatus()}`);
  });