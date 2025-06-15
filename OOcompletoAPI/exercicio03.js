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
// 1. Crie uma classe abstrata Pagamento com métodos abstratos processar() e estornar().
var Pagamento = /** @class */ (function () {
    function Pagamento() {
        this.idTransacao = this.gerarIdTransacao();
        this.status = 'pendente';
    }
    // Método auxiliar para gerar um ID de transação (simulação)
    Pagamento.prototype.gerarIdTransacao = function () {
        return 'TRANS_' + Math.random().toString(36).substring(2, 11).toUpperCase();
    };
    // Método para obter o status da transação
    Pagamento.prototype.getStatus = function () {
        return this.status;
    };
    // Método para obter o ID da transação
    Pagamento.prototype.getIdTransacao = function () {
        return this.idTransacao;
    };
    return Pagamento;
}());
// 2. Implemente classes: PagamentoCartao, PagamentoPIX, PagamentoBoleto.
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao, validade, cvv) {
        var _this = _super.call(this) || this; // Chama o construtor da classe abstrata Pagamento
        _this.numeroCartao = numeroCartao;
        _this.validade = validade;
        _this.cvv = cvv;
        return _this;
    }
    PagamentoCartao.prototype.processar = function (valor) {
        console.log("\n--- Processando Pagamento por Cart\u00E3o (".concat(this.idTransacao, ") ---"));
        console.log("Valor: R$ ".concat(valor.toFixed(2)));
        console.log("Cart\u00E3o: **** **** **** ".concat(this.numeroCartao.slice(-4)));
        // Simulação de lógica de processamento de cartão:
        // - Chamada a uma API de gateway de pagamento
        // - Verificação de validade, saldo, etc.
        if (Math.random() > 0.1) { // 90% de chance de sucesso
            this.status = 'processado';
            console.log("Pagamento por Cartão processado com sucesso!");
        }
        else {
            this.status = 'falhou';
            console.log("Falha ao processar pagamento por Cartão.");
        }
        console.log("Status atual: ".concat(this.status));
    };
    PagamentoCartao.prototype.estornar = function () {
        console.log("\n--- Estornando Pagamento por Cart\u00E3o (".concat(this.idTransacao, ") ---"));
        if (this.status === 'processado') {
            // Simulação de lógica de estorno de cartão:
            // - Chamada a uma API de gateway de pagamento para estorno
            this.status = 'estornado';
            console.log("Estorno de Pagamento por Cartão realizado com sucesso!");
        }
        else if (this.status === 'estornado') {
            console.log("Pagamento por Cartão já estava estornado.");
        }
        else {
            console.log("Não é possível estornar um pagamento por Cartão que não foi processado ou falhou.");
        }
        console.log("Status atual: ".concat(this.status));
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoPIX = /** @class */ (function (_super) {
    __extends(PagamentoPIX, _super);
    function PagamentoPIX(chavePIX) {
        var _this = _super.call(this) || this;
        _this.chavePIX = chavePIX;
        return _this;
    }
    PagamentoPIX.prototype.processar = function (valor) {
        console.log("\n--- Processando Pagamento por PIX (".concat(this.idTransacao, ") ---"));
        console.log("Valor: R$ ".concat(valor.toFixed(2)));
        console.log("Chave PIX: ".concat(this.chavePIX));
        // Simulação de lógica de processamento PIX:
        // - Geração de QR Code ou código copia e cola
        // - Monitoramento da confirmação do pagamento
        if (Math.random() > 0.05) { // 95% de chance de sucesso
            this.status = 'processado';
            console.log("Pagamento por PIX processado com sucesso!");
        }
        else {
            this.status = 'falhou';
            console.log("Falha ao processar pagamento por PIX.");
        }
        console.log("Status atual: ".concat(this.status));
    };
    PagamentoPIX.prototype.estornar = function () {
        console.log("\n--- Estornando Pagamento por PIX (".concat(this.idTransacao, ") ---"));
        if (this.status === 'processado') {
            // Simulação de lógica de estorno PIX:
            // - Chamada a API do Banco Central ou provedor de PIX para devolução
            this.status = 'estornado';
            console.log("Estorno de Pagamento por PIX realizado com sucesso!");
        }
        else if (this.status === 'estornado') {
            console.log("Pagamento por PIX já estava estornado.");
        }
        else {
            console.log("Não é possível estornar um pagamento por PIX que não foi processado ou falhou.");
        }
        console.log("Status atual: ".concat(this.status));
    };
    return PagamentoPIX;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        var _this = _super.call(this) || this;
        _this.linhaDigitavel = _this.gerarLinhaDigitavel(); // Simula a geração da linha digitável
        return _this;
    }
    PagamentoBoleto.prototype.gerarLinhaDigitavel = function () {
        // Simulação de geração de linha digitável de boleto
        return "34191.00008 00000.000000 00000.000000 9 00000000000000";
    };
    PagamentoBoleto.prototype.processar = function (valor) {
        console.log("\n--- Processando Pagamento por Boleto (".concat(this.idTransacao, ") ---"));
        console.log("Valor: R$ ".concat(valor.toFixed(2)));
        console.log("Linha Digit\u00E1vel: ".concat(this.linhaDigitavel));
        // Simulação de lógica de processamento de boleto:
        // - O boleto é gerado e o cliente o paga
        // - O sistema aguarda a compensação bancária (dias úteis)
        // Para simplificar, simulamos um sucesso imediato
        if (Math.random() > 0.3) { // 70% de chance de "compensar"
            this.status = 'processado';
            console.log("Pagamento por Boleto processado/compensado com sucesso!");
        }
        else {
            this.status = 'falhou';
            console.log("Falha ao processar pagamento por Boleto (não compensado a tempo).");
        }
        console.log("Status atual: ".concat(this.status));
    };
    PagamentoBoleto.prototype.estornar = function () {
        console.log("\n--- Estornando Pagamento por Boleto (".concat(this.idTransacao, ") ---"));
        if (this.status === 'processado') {
            // Estorno de boleto é mais complexo na vida real (crédito em conta do cliente)
            this.status = 'estornado';
            console.log("Estorno de Pagamento por Boleto solicitado e em processamento (crédito em conta do cliente).");
        }
        else if (this.status === 'estornado') {
            console.log("Pagamento por Boleto já estava estornado.");
        }
        else {
            console.log("Não é possível estornar um pagamento por Boleto que não foi processado ou falhou.");
        }
        console.log("Status atual: ".concat(this.status));
    };
    return PagamentoBoleto;
}(Pagamento));
// 3. Use polimorfismo para processar uma lista de pagamentos.
// Criando instâncias de diferentes tipos de pagamento
var pagamentoCartao1 = new PagamentoCartao("4444555566667777", "12/28", "123");
var pagamentoPIX1 = new PagamentoPIX("email@example.com");
var pagamentoBoleto1 = new PagamentoBoleto();
var pagamentoCartao2 = new PagamentoCartao("1111222233334444", "05/25", "456"); // Simula um cartão que pode falhar
var pagamentoPIX2 = new PagamentoPIX("999.888.777-66");
// Criando uma lista de pagamentos (usando o tipo base Pagamento)
var listaDePagamentos = [
    pagamentoCartao1,
    pagamentoPIX1,
    pagamentoBoleto1,
    pagamentoCartao2,
    pagamentoPIX2,
];
console.log("===============================================");
console.log("           Iniciando Processamento de Pagamentos           ");
console.log("===============================================");
var valorExemplo = 150.75;
// Processar cada pagamento na lista
listaDePagamentos.forEach(function (pagamento, index) {
    console.log("\n--- Itera\u00E7\u00E3o ".concat(index + 1, " ---"));
    pagamento.processar(valorExemplo);
});
console.log("\n===============================================");
console.log("           Iniciando Processamento de Estornos           ");
console.log("===============================================");
// Estornar alguns pagamentos (ex: o primeiro e o segundo)
listaDePagamentos.forEach(function (pagamento, index) {
    // Vamos tentar estornar apenas os que foram processados com sucesso
    if (pagamento.getStatus() === 'processado') {
        pagamento.estornar();
    }
    else {
        console.log("\nN\u00E3o \u00E9 poss\u00EDvel estornar o pagamento ".concat(pagamento.getIdTransacao(), " (status: ").concat(pagamento.getStatus(), ")."));
    }
});
console.log("\n===============================================");
console.log("           Verificando Status Finais           ");
console.log("===============================================");
listaDePagamentos.forEach(function (pagamento, index) {
    console.log("Pagamento #".concat(index + 1, " (ID: ").concat(pagamento.getIdTransacao(), "): Status Final: ").concat(pagamento.getStatus()));
});
