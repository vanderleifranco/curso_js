/***********************************************************************************
 * Componente	Descrição
*  abstract class OrdemServico	Classe base com métodos comuns e abstratos.
*  interface Priorizavel	Define se a OS pode ter prioridade.
*  interface Auditavel	Permite gerar logs de auditoria.
*  class OrdemSuporte	OS comum para suporte técnico.
*  class OrdemProjeto	OS para projetos (com prioridade).
 **********************************************************************************/
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
// ABSTRACAO ORDEMSERVICO
var OrdemServico = /** @class */ (function () {
    function OrdemServico(id, titulo, responsavel) {
        this.id = id;
        this.titulo = titulo;
        this.responsavel = responsavel;
    }
    //concreto
    OrdemServico.prototype.registrarLog = function (acao) {
        console.log("[LOG] => ".concat(this.id, " ").concat(this.titulo, " ").concat(acao));
    };
    return OrdemServico;
}());
var OrdemSuporte = /** @class */ (function (_super) {
    __extends(OrdemSuporte, _super);
    function OrdemSuporte(id, titulo, responsavel) {
        return _super.call(this, id, titulo, responsavel) || this;
    }
    OrdemSuporte.prototype.executar = function () {
        this.registrarLog("Iniciando suporte técnico...");
        console.log("Resolvendo: ".concat(this.titulo));
    };
    OrdemSuporte.prototype.gerarAuditoria = function () {
        return "Auditoria OS #".concat(this.id, ": Suporte conclu\u00EDdo por ").concat(this.responsavel);
    };
    return OrdemSuporte;
}(OrdemServico));
var OrdemProjeto = /** @class */ (function (_super) {
    __extends(OrdemProjeto, _super);
    function OrdemProjeto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prioridade = 1; // Default: baixa
        return _this;
    }
    OrdemProjeto.prototype.definirPrioridade = function (nivel) {
        this.prioridade = nivel;
        this.registrarLog("Prioridade alterada para ".concat(nivel));
    };
    OrdemProjeto.prototype.executar = function () {
        this.registrarLog("Iniciando projeto (Prioridade ".concat(this.prioridade, ")"));
        console.log("Projeto \"".concat(this.titulo, "\" em andamento."));
    };
    OrdemProjeto.prototype.gerarAuditoria = function () {
        return "Auditoria OS #".concat(this.id, ": Projeto com prioridade ").concat(this.prioridade);
    };
    return OrdemProjeto;
}(OrdemServico));
var ordens = [
    new OrdemSuporte(1, "Problema no Windows", "Ana"),
    new OrdemProjeto(2, "Migração para nuvem", "Carlos")
];
// Definir prioridade apenas para OrdemProjeto
ordens[1].definirPrioridade(3);
// Processar todas as ordens
ordens.forEach(function (os) {
    os.executar();
    // Gerar auditoria se implementar Auditavel
    if ("gerarAuditoria" in os) {
        console.log(os.gerarAuditoria());
    }
});
