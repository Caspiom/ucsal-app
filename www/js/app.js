angular.module('ucsalApp', ['ionic'])

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('Voltar').previousTitleText(false);

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    })
    .state('app.noticias', {
      url: '/noticias',
      views: {
        menuContent: {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    })
    .state('app.noticiaDetalhe', {
      url: '/noticias/:id',
      views: {
        menuContent: {
          templateUrl: 'templates/noticia-detalhe.html',
          controller: 'NoticiaDetalheCtrl'
        }
      }
    })
    .state('app.perfil', {
      url: '/perfil',
      views: {
        menuContent: {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
        }
      }
    })
    .state('app.financeiro', {
      url: '/financeiro',
      views: {
        menuContent: {
          templateUrl: 'templates/financeiro.html',
          controller: 'FinanceiroCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise(function($injector) {
    return $injector.get('AuthService').estaLogado() ? '/app/noticias' : '/login';
  });
}])

.run(['$rootScope', '$state', '$locale', 'AuthService', function($rootScope, $state, $locale, AuthService) {
  $locale.NUMBER_FORMATS.DECIMAL_SEP = ',';
  $locale.NUMBER_FORMATS.GROUP_SEP = '.';

  $rootScope.$on('$stateChangeStart', function(evento, estadoDestino) {
    if (estadoDestino.name !== 'login' && !AuthService.estaLogado()) {
      evento.preventDefault();
      $state.go('login');
    }
  });
}]);
