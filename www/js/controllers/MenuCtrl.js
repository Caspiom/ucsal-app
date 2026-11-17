angular.module('ucsalApp').controller('MenuCtrl', ['$scope', '$state', '$ionicHistory', 'AuthService', function($scope, $state, $ionicHistory, AuthService) {
  $scope.getAluno = AuthService.getAlunoLogado;

  $scope.sair = function() {
    AuthService.sair();
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({ historyRoot: true, disableAnimate: true });
    $state.go('login');
  };
}]);
