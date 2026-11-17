# Portal do Aluno UCSal

Protótipo do portal do aluno feito com Ionic 1 e AngularJS. Os dados são mockados nos services e o cadastro editado fica salvo no localStorage.

## Como rodar

A pasta `www` precisa ser servida por HTTP (os templates são carregados por requisição):

    cd www
    python3 -m http.server 8080

Depois abra http://localhost:8080. Com Node.js também funciona `npx http-server www -p 8080`.

## Logins de teste

| Matrícula | Senha  |
|-----------|--------|
| 20261001  | 123456 |
| 20261002  | abc123 |

## Estrutura

- `www/js/app.js`: módulo, rotas com `$stateProvider` e bloqueio de telas sem login
- `www/js/services`: AuthService, AlunoService, NoticiasService, FinanceiroService
- `www/js/controllers`: um controller por tela
- `www/templates`: telas HTML
- `www/lib/ionic`: Ionic 1.3.2 (já inclui o AngularJS 1.5.3 e o ui-router)
