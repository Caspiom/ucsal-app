angular.module('ucsalApp').factory('NoticiasService', function() {
  var publicacoes = [
    {
      id: 1,
      titulo: 'Prazo de rematrícula 2027.1 termina em 30 de novembro',
      data: '2026-11-05',
      categoria: 'Notícia',
      imagem: 'img/rematricula.svg',
      conteudo: 'A rematrícula para o semestre 2027.1 deve ser concluída até o dia 30 de novembro. O aluno precisa estar com as mensalidades em dia e confirmar os dados cadastrais no portal. Quem não renovar a matrícula no prazo pode perder a vaga nas turmas escolhidas.'
    },
    {
      id: 2,
      titulo: 'Edital de iniciação científica está com inscrições abertas',
      data: '2026-11-10',
      categoria: 'Notícia',
      imagem: 'img/pesquisa.svg',
      conteudo: 'Estão abertas as inscrições para o edital de iniciação científica. Podem participar alunos com matrícula ativa a partir do segundo semestre, com um professor orientador. O projeto deve ser enviado pela coordenação do curso até o fim do prazo do edital.'
    },
    {
      id: 3,
      titulo: 'Biblioteca amplia horário durante as provas finais',
      data: '2026-11-12',
      categoria: 'Notícia',
      imagem: 'img/biblioteca.svg',
      conteudo: 'Durante o período das provas finais, a biblioteca funcionará em horário estendido nos campi Pituaçu e Federação. As salas de estudo em grupo podem ser reservadas no balcão de atendimento.'
    },
    {
      id: 4,
      titulo: 'Semoc 2026 reúne projetos de pesquisa e extensão',
      data: '2026-10-20',
      categoria: 'Evento',
      imagem: 'img/semoc.svg',
      conteudo: 'A Semoc reuniu apresentações de trabalhos, palestras e oficinas feitas por alunos e professores. A UCSal participou com projetos de pesquisa e de extensão de diversos cursos, e os alunos de Engenharia de Software apresentaram protótipos desenvolvidos nas disciplinas.'
    },
    {
      id: 5,
      titulo: 'Maratona de Programação no campus Pituaçu',
      data: '2026-12-05',
      categoria: 'Evento',
      imagem: 'img/maratona.svg',
      conteudo: 'A maratona de programação acontece no campus Pituaçu e é aberta a alunos de todos os cursos de tecnologia. As equipes têm três integrantes e resolvem problemas de lógica e algoritmos no tempo da prova. As inscrições são feitas pela coordenação.'
    },
    {
      id: 6,
      titulo: 'Feira de projetos de extensão no campus Federação',
      data: '2026-12-10',
      categoria: 'Evento',
      imagem: 'img/extensao.svg',
      conteudo: 'A feira apresenta os projetos de extensão desenvolvidos junto às comunidades atendidas pela universidade. Os alunos participantes explicam os resultados e o público pode conversar com as equipes durante todo o dia.'
    }
  ];

  return {
    listar: function() {
      return publicacoes;
    },

    buscarPorId: function(id) {
      return publicacoes.filter(function(publicacao) {
        return publicacao.id === Number(id);
      })[0] || null;
    }
  };
});
