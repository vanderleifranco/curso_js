/***********************************************************************************
 * Componente	Descrição
*  abstract class OrdemServico	Classe base com métodos comuns e abstratos.
*  interface Priorizavel	Define se a OS pode ter prioridade.
*  interface Auditavel	Permite gerar logs de auditoria.
*  class OrdemSuporte	OS comum para suporte técnico.
*  class OrdemProjeto	OS para projetos (com prioridade).
 **********************************************************************************/

// ABSTRACAO ORDEMSERVICO

abstract class OrdemServico{
    constructor(
        public id: number,
        public titulo: string,
        public responsavel: string
    ){}
    abstract executar():void
    //concreto
    registrarLog(acao: string):void{
        console.log(`[LOG] => ${this.id} ${this.titulo} ${acao}`)
    }
}

interface Priorizavel {
    prioridade: number
    definirPrioridade(nivel: number): void
}

interface Auditavel {
    gerarAuditoria(): string
}

class OrdemSuporte extends OrdemServico implements Auditavel {
    constructor(id: number, titulo: string, responsavel: string) {
        super(id, titulo, responsavel);
    }

    executar(): void {
        this.registrarLog("Iniciando suporte técnico...");
        console.log(`Resolvendo: ${this.titulo}`);
    }

    gerarAuditoria(): string {
        return `Auditoria OS #${this.id}: Suporte concluído por ${this.responsavel}`;
    }
}
class OrdemProjeto extends OrdemServico implements Priorizavel, Auditavel {
    prioridade: number = 1; // Default: baixa

    definirPrioridade(nivel: number): void {
        this.prioridade = nivel;
        this.registrarLog(`Prioridade alterada para ${nivel}`);
    }

    executar(): void {
        this.registrarLog(`Iniciando projeto (Prioridade ${this.prioridade})`);
        console.log(`Projeto "${this.titulo}" em andamento.`);
    }

    gerarAuditoria(): string {
        return `Auditoria OS #${this.id}: Projeto com prioridade ${this.prioridade}`;
    }
}

const ordens: OrdemServico[] = [
    new OrdemSuporte(1, "Problema no Windows", "Ana"),
    new OrdemProjeto(2, "Migração para nuvem", "Carlos")
];

// Definir prioridade apenas para OrdemProjeto
(ordens[1] as OrdemProjeto).definirPrioridade(3)

// Processar todas as ordens
ordens.forEach(os => {
    os.executar();
    
    // Gerar auditoria se implementar Auditavel
    if ("gerarAuditoria" in os) {
        console.log((os as Auditavel).gerarAuditoria());
    }
})