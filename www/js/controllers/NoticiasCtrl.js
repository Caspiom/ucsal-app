angular.module('ucsalApp').controller('NoticiasCtrl', ['$scope', '$state', 'NoticiasService', function($scope, $state, NoticiasService) {
  $scope.publicacoes = NoticiasService.listar();
  $scope.filtro = { categoria: '' };

  $scope.lerMais = function(publicacao) {
    $state.go('app.noticiaDetalhe', { id: publicacao.id });
  };
}]);
