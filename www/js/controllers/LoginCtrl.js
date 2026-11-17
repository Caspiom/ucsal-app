angular.module('ucsalApp').controller('LoginCtrl', ['$scope', '$state', '$ionicHistory', 'AuthService', function($scope, $state, $ionicHistory, AuthService) {
  $scope.dados = { matricula: '', senha: '' };
  $scope.mensagemErro = '';

  $scope.entrar = function() {
    if (!$scope.dados.matricula || !$scope.dados.senha) {
      $scope.mensagemErro = 'Informe a matrícula e a senha.';
      return;
    }

    var aluno = AuthService.entrar($scope.dados.matricula, $scope.dados.senha);

    if (!aluno) {
      $scope.mensagemErro = 'Matrícula ou senha incorretas.';
      return;
    }

    $scope.mensagemErro = '';
    $scope.dados.senha = '';
    $ionicHistory.nextViewOptions({ historyRoot: true, disableAnimate: true });
    $state.go('app.noticias');
  };
}]);
