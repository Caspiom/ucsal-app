angular.module('ucsalApp').factory('FinanceiroService', function() {
  var mensalidadesPorSemestre = {
    '2025.2': [
      { id: '2025.2-07', mes: 'Julho/2025', vencimento: '2025-07-10', valor: 1390, status: 'Paga', codigoBarras: '' },
      { id: '2025.2-08', mes: 'Agosto/2025', vencimento: '2025-08-10', valor: 1390, status: 'Paga', codigoBarras: '' },
      { id: '2025.2-09', mes: 'Setembro/2025', vencimento: '2025-09-10', valor: 1390, status: 'Paga', codigoBarras: '' },
      { id: '2025.2-10', mes: 'Outubro/2025', vencimento: '2025-10-10', valor: 1390, status: 'Paga', codigoBarras: '' },
      { id: '2025.2-11', mes: 'Novembro/2025', vencimento: '2025-11-10', valor: 1390, status: 'Paga', codigoBarras: '' },
      { id: '2025.2-12', mes: 'Dezembro/2025', vencimento: '2025-12-10', valor: 1390, status: 'Paga', codigoBarras: '' }
    ],
    '2026.1': [
      { id: '2026.1-01', mes: 'Janeiro/2026', vencimento: '2026-01-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.1-02', mes: 'Fevereiro/2026', vencimento: '2026-02-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.1-03', mes: 'Março/2026', vencimento: '2026-03-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.1-04', mes: 'Abril/2026', vencimento: '2026-04-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.1-05', mes: 'Maio/2026', vencimento: '2026-05-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.1-06', mes: 'Junho/2026', vencimento: '2026-06-10', valor: 1450, status: 'Paga', codigoBarras: '' }
    ],
    '2026.2': [
      { id: '2026.2-07', mes: 'Julho/2026', vencimento: '2026-07-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.2-08', mes: 'Agosto/2026', vencimento: '2026-08-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.2-09', mes: 'Setembro/2026', vencimento: '2026-09-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.2-10', mes: 'Outubro/2026', vencimento: '2026-10-10', valor: 1450, status: 'Paga', codigoBarras: '' },
      { id: '2026.2-11', mes: 'Novembro/2026', vencimento: '2026-11-10', valor: 1450, status: 'A Pagar', codigoBarras: '23790.12345 60000.111111 11111.222222 3 99180000145000' },
      { id: '2026.2-12', mes: 'Dezembro/2026', vencimento: '2026-12-10', valor: 1450, status: 'A Pagar', codigoBarras: '23790.12345 60000.222222 22222.333333 4 99480000145000' }
    ]
  };

  return {
    listarSemestres: function() {
      return Object.keys(mensalidadesPorSemestre).sort();
    },

    listarMensalidades: function(semestre) {
      return mensalidadesPorSemestre[semestre] || [];
    }
  };
});
