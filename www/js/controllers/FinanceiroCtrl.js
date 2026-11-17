angular.module('ucsalApp').controller('FinanceiroCtrl', ['$scope', '$q', '$ionicLoading', 'FinanceiroService', function($scope, $q, $ionicLoading, FinanceiroService) {
  $scope.semestres = FinanceiroService.listarSemestres();
  $scope.selecao = { semestre: $scope.semestres[$scope.semestres.length - 1] };
  $scope.mensalidades = [];
  $scope.codigoCopiadoId = null;

  function calcularResumo() {
    $scope.resumo = { pago: 0, aPagar: 0 };
    $scope.mensalidades.forEach(function(mensalidade) {
      if (mensalidade.status === 'Paga') {
        $scope.resumo.pago += mensalidade.valor;
      } else {
        $scope.resumo.aPagar += mensalidade.valor;
      }
    });
  }

  $scope.carregarMensalidades = function() {
    $scope.mensalidades = FinanceiroService.listarMensalidades($scope.selecao.semestre);
    $scope.codigoCopiadoId = null;
    calcularResumo();
  };

  function copiarTexto(texto) {
    if (navigator.clipboard && window.isSecureContext) {
      return $q.when(navigator.clipboard.writeText(texto));
    }

    var campoTemporario = document.createElement('textarea');
    campoTemporario.value = texto;
    document.body.appendChild(campoTemporario);
    campoTemporario.select();
    document.execCommand('copy');
    document.body.removeChild(campoTemporario);
    return $q.when();
  }

  $scope.copiarCodigoDeBarras = function(mensalidade) {
    copiarTexto(mensalidade.codigoBarras).then(function() {
      $scope.codigoCopiadoId = mensalidade.id;
      $ionicLoading.show({ template: 'Código de barras copiado', duration: 1500 });
    });
  };

  $scope.carregarMensalidades();
}]);
