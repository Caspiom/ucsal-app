angular.module('ucsalApp').controller('NoticiaDetalheCtrl', ['$scope', '$stateParams', 'NoticiasService', function($scope, $stateParams, NoticiasService) {
  $scope.publicacao = NoticiasService.buscarPorId($stateParams.id);
}]);
