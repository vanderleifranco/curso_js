// Classe base para um contato
class Contato {
  private _nome: string;
  private _telefone: string;
  private _email: string;

  constructor(nome: string, telefone: string, email: string) {
      this._nome = nome;
      this._telefone = telefone;
      this._email = email;
  }

  // Getters e Setters
  get nome(): string {
      return this._nome;
  }

  set nome(novoNome: string) {
      if (novoNome.length < 2) {
          throw new Error('O nome deve ter pelo menos 2 caracteres');
      }
      this._nome = novoNome;
  }

  get telefone(): string {
      return this._telefone;
  }

  set telefone(novoTelefone: string) {
      if (!novoTelefone.match(/^\d+$/)) {
          throw new Error('O telefone deve conter apenas números');
      }
      this._telefone = novoTelefone;
  }

  get email(): string {
      return this._email;
  }

  set email(novoEmail: string) {
      if (!novoEmail.includes('@')) {
          throw new Error('Email inválido');
      }
      this._email = novoEmail;
  }

  public toString(): string {
      return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`;
  }
}

// Classe derivada para contato profissional
class ContatoProfissional extends Contato {
  private _cargo: string;
  private _empresa: string;

  constructor(
      nome: string,
      telefone: string,
      email: string,
      cargo: string,
      empresa: string
  ) {
      super(nome, telefone, email); // Chama o construtor da classe base
      this._cargo = cargo;
      this._empresa = empresa;
  }

  // Getters e Setters específicos
  get cargo(): string {
      return this._cargo;
  }

  set cargo(novoCargo: string) {
      if (novoCargo.length < 2) {
          throw new Error('O cargo deve ter pelo menos 2 caracteres');
      }
      this._cargo = novoCargo;
  }

  get empresa(): string {
      return this._empresa;
  }

  set empresa(novaEmpresa: string) {
      this._empresa = novaEmpresa;
  }

  // Sobrescreve o método toString da classe base
  public toString(): string {
      return `${super.toString()}, Cargo: ${this.cargo}, Empresa: ${this.empresa}`;
  }
}

// Classe Agenda que gerencia os contatos
class Agenda {
  private _contatos: Contato[] = [];

  // Getter para contatos (apenas leitura)
  get contatos(): readonly Contato[] {
      return this._contatos;
  }

  // Adiciona um contato
  public adicionarContato(contato: Contato): void {
      // Verifica se o contato já existe pelo telefone
      const existe = this._contatos.some(c => c.telefone === contato.telefone);
      if (existe) {
          throw new Error('Já existe um contato com este telefone');
      }
      this._contatos.push(contato);
  }

  // Remove um contato pelo telefone
  public removerContato(telefone: string): void {
      this._contatos = this._contatos.filter(c => c.telefone !== telefone);
  }

  // Busca contatos pelo nome
  public buscarPorNome(nome: string): Contato[] {
      return this._contatos.filter(c => 
          c.nome.toLowerCase().includes(nome.toLowerCase())
      );
  }

  // Lista todos os contatos
  public listarContatos(): string {
      return this._contatos.map(c => c.toString()).join('\n');
  }
}

// Exemplo de uso da agenda
try {
  const agenda = new Agenda();

  // Adicionando contatos
  const contato1 = new Contato('Ana Silva', '11987654321', 'ana@email.com');
  const contatoProfissional1 = new ContatoProfissional(
      'Carlos Souza', 
      '21912345678', 
      'carlos@empresa.com', 
      'Gerente', 
      'Tech Solutions'
  );

  agenda.adicionarContato(contato1);
  agenda.adicionarContato(contatoProfissional1);

  console.log('--- Todos os contatos ---');
  console.log(agenda.listarContatos());

  // Atualizando um contato usando setter
  contato1.nome = 'Ana Clara Silva';
  contato1.telefone = '11999999999';

  console.log('\n--- Após atualização ---');
  console.log(agenda.listarContatos());

  // Buscando contatos
  console.log('\n--- Busca por "Carlos" ---');
  const resultadosBusca = agenda.buscarPorNome('Carlos');
  resultadosBusca.forEach(c => console.log(c.toString()));

  // Tentativas inválidas (geram erros)
  // contato1.telefone = 'abc'; // Erro: O telefone deve conter apenas números
  // contato1.email = 'semarroba'; // Erro: Email inválido
  // agenda.adicionarContato(new Contato('Lu', '1', 'lu@email.com')); // Erro: Nome muito curto

} catch (error) {
  console.error(`Erro: ${(error as Error).message}`);
}
  
