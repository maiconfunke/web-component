# Web Component: bankline-pf-investimentos-catalogo

Este projeto Angular foi adaptado para ser exportado como um Web Component custom element chamado `bankline-pf-investimentos-catalogo`.

Passos para gerar o bundle do web component:

1. Instale dependências (inclui `@angular/elements`):

```powershell
npm install
```

2. Faça o build para produção (gera bundles sem hashing):

```powershell
npm run build:wc
```

3. O output estará em `dist/` (ou conforme `angular.json`), e você pode carregar os arquivos JS resultantes em qualquer página e usar a tag:

```html
<script src="path/to/runtime.js"></script>
<script src="path/to/polyfills.js"></script>
<script src="path/to/main.js"></script>

<bankline-pf-investimentos-catalogo></bankline-pf-investimentos-catalogo>
```

Notas:
- O projeto usa HashLocationStrategy para roteamento, então as rotas internas aparecerão após `#` no URL.
- Se precisar de lazy-loading mais avançado ou single-bundle custom element, considere usar builders específicos (por exemplo, ngx-build-plus) ou empacotar com Rollup/webpack manualmente.
# WebComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
