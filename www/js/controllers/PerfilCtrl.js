angular.module('ucsalApp').controller('PerfilCtrl', ['$scope', '$ionicPopup', 'AuthService', 'AlunoService', function($scope, $ionicPopup, AuthService, AlunoService) {
  $scope.mensagemErro = '';

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.aluno = angular.copy(AuthService.getAlunoLogado());
    $scope.mensagemErro = '';
  });

  $scope.salvar = function(formulario) {
    if (formulario.$invalid) {
      $scope.mensagemErro = 'Preencha todos os campos com dados válidos.';
      return;
    }

    $scope.mensagemErro = '';
    AlunoService.salvarContato($scope.aluno.matricula, $scope.aluno);

    $ionicPopup.alert({
      title: 'Cadastro atualizado',
      template: 'Suas alterações foram salvas.',
      okText: 'OK'
    });
  };
}]);
