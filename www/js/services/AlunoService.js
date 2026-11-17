angular.module('ucsalApp').factory('AlunoService', function() {
  var chaveArmazenamento = 'ucsalAlunos';

  var alunosPadrao = [
    {
      nome: 'Lucas Gaspari',
      matricula: '20261001',
      curso: 'Engenharia de Software',
      email: 'lucas.gaspari@exemplo.com',
      telefone: '(71) 99999-1001',
      cep: '41740-090',
      rua: 'Av. Prof. Pinto de Aguiar, 2589',
      bairro: 'Pituaçu',
      cidade: 'Salvador'
    },
    {
      nome: 'Maria Souza',
      matricula: '20261002',
      curso: 'Engenharia de Software',
      email: 'maria.souza@exemplo.com',
      telefone: '(71) 98888-1002',
      cep: '40210-630',
      rua: 'Rua Carlos Gomes, 100',
      bairro: 'Federação',
      cidade: 'Salvador'
    }
  ];

  var salvo = localStorage.getItem(chaveArmazenamento);
  var alunos = salvo ? JSON.parse(salvo) : alunosPadrao;

  return {
    buscarPorMatricula: function(matricula) {
      return alunos.filter(function(aluno) {
        return aluno.matricula === matricula;
      })[0] || null;
    },

    salvarContato: function(matricula, dadosEditados) {
      var aluno = this.buscarPorMatricula(matricula);
      aluno.email = dadosEditados.email;
      aluno.telefone = dadosEditados.telefone;
      aluno.cep = dadosEditados.cep;
      aluno.rua = dadosEditados.rua;
      aluno.bairro = dadosEditados.bairro;
      aluno.cidade = dadosEditados.cidade;
      localStorage.setItem(chaveArmazenamento, JSON.stringify(alunos));
      return aluno;
    }
  };
});
