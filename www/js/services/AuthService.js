angular.module('ucsalApp').factory('AuthService', ['AlunoService', function(AlunoService) {
  var credenciais = [
    { matricula: '20261001', senha: '123456' },
    { matricula: '20261002', senha: 'abc123' }
  ];

  var alunoLogado = null;

  return {
    entrar: function(matricula, senha) {
      var credencialValida = credenciais.some(function(credencial) {
        return credencial.matricula === String(matricula).trim() && credencial.senha === senha;
      });

      if (!credencialValida) {
        return null;
      }

      alunoLogado = AlunoService.buscarPorMatricula(String(matricula).trim());
      return alunoLogado;
    },

    sair: function() {
      alunoLogado = null;
    },

    estaLogado: function() {
      return alunoLogado !== null;
    },

    getAlunoLogado: function() {
      return alunoLogado;
    }
  };
}]);
