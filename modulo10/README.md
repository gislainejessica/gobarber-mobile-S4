Etapas do projeto:

[x] __Configurando__ estrutura
[x] __Configurando__ Root Import
[x] Rotas de autenticação
[ ] __Configurando__ background
[ ] Input & Button
[ ] Página SignIn
[ ] Página SignUp
[ ] __Configurando__ StatusBar
[ ] Dicas de acessibilidade
[ ] Reactotron
[ ] __Configurando__ Redux
[ ] Conectando Redux
[ ] Rota inicial
[ ] Estilizações das rotas
[ ] Lista de agendamentos
[ ] Agendamentos da API
[ ] Atualização de perfil
[ ] Logout
[ ] Rotas de agendamento
[ ] Listagem de prestadores
[ ] DatePicker por plataforma
[ ] Selecionando horário
[ ] Confirmando agendamento
[ ] Load de agendamentos

---

:white_check_mark: check-list

Ver videos | Codar | Documentar| Revisar
-----------|-------|-----------|---------
:clock10:| :clock10:|:clock10:|:clock10:

### Inicializando o projeto

- 1 Criar um projeto em _React-Native_: `react-native init modulo10`

- 2 Gerar o `.editorcofig`

- 3 Instalar o `eslint` e configura-lo

- 4 Instalar os plugins que serão usados no eslint : `prettier` e `react-hooks`

- 5 Configurar o `reactotron`:

  - `src/config/Reactotron.js`
  - _host_ pode alterar, verificar quando rodar a aplicação
  - Lembrar de chamar o arquivo de configuração no componente raiz
    - `import './config/Reactotron'` => src/index.js

  - Terminal:
  ```js
    yarn add eslint -D
    yarn eslint --init

    yarn add prettier
              eslint-config-prettier
              eslint-plugin-prettier
              babel-eslint
          eslint-plugin-react-hooks -D

    yarn add reactotron-react-native
  ```

---

Configurar o projeto para que, nas importações, se acesse as pastas a partir da raiz do projeto diretamente:
- 1 Instalar dependências : `yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D`
- 2 Adcionar plugin ao `babel.config.js`
  ```js
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src'
        }
      ]
    ]
  ```

  - 3 Criar um arquivo `jsconfig.json` para que o vscode entenda as configurações acima e redirecione ao clicar nas importações
  ```json
  {
    "compilerOptions": {
      "baseUrl": "src",
      "paths": {
        "~/*":["*"]
      }
    }
  }
  ```
---
## Configurando a navegação do projeto

[React-Navigation Start](https://reactnavigation.org/docs/en/getting-started.html)

- 1 Instalando a biblioteca que vamos usar para fazer a navegação
  - `yarn add react-navigation`

- 2 Instalando dependências para que o _React-Navigation_ funcione 100%
  - `yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23`

- 3 Fazer as configurações para android nos arquivos _build.gradle_ e _MainActivity.java_, seguindo a   documentação do site

---
## Configurando Background da aplicação

- 1 Instalando a biblioteca para gerar um background em forma de [gradiente](https://github.com/react-native-community/react-native-linear-gradient)
  - `yarn add react-native-linear-gradient`

- 2 Instalando o styled-components
  - `yarn add styled-components`

---
## Componentes Input e Button
Criar componentes globais que serão usados em varios locais da aplicação, por terem um funcionamento que estilos que poderão ser aplicados em difrentes partes da aplicação, então pra não ficar repetindo código e como sabemos que vamos precisar da estrutura desses compoentes em varios locais diferentes, vamos isolar para poder usar quando necessário.


- `yarn add prop-types`

### Colocar [icones](https://github.com/oblador/react-native-vector-icons#android) no apllicativo

- `yarn add react-native-vector-icons`
