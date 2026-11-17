angular.module('ucsalApp').filter('iniciais', function() {
  return function(nome) {
    if (!nome) {
      return '';
    }

    var palavras = nome.trim().split(/\s+/);
    var primeira = palavras[0].charAt(0);
    var ultima = palavras.length > 1 ? palavras[palavras.length - 1].charAt(0) : '';
    return (primeira + ultima).toUpperCase();
  };
});
