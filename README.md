# Pokémon Insights

![Pokémon Insights HomePage](public/HomePage.png)


Bem-vindo ao Pokémon Insights! Este projeto é uma aplicação web interativa desenvolvida com **Vue.js**, projetada para explorar e visualizar dados de Pokémon de uma forma intuitiva e agradável. Use-o para pesquisar Pokémon, filtrar por tipo e geração, e mergulhar em detalhes, estatísticas e cadeias de evolução de cada criatura.

---
## 🌟 Funcionalidades

* **Listagem de Pokémon**: Navegue por uma vasta lista de Pokémon, completa com suas imagens, nomes e números.
* **Pesquisa Dinâmica**: Encontre seu Pokémon favorito rapidamente usando a barra de pesquisa.
* **Filtro por Tipo**: Filtre Pokémon por seu tipo principal (Fogo, Água, Grama, etc.). O seletor de tipo se adapta visualmente à cor do tipo selecionado!
* **Filtro por Geração**: Explore Pokémon de gerações específicas para focar sua pesquisa.
* **Detalhes do Pokémon**: Clique em qualquer Pokémon para ver uma página dedicada com:
    * Estatísticas base (HP, Ataque, Defesa, etc.) visualizadas em barras de progresso.
    * Altura, peso e habilidades.
    * Cadeia de evolução interativa, permitindo navegar entre as formas evoluídas.
    * Fundo do cartão de detalhes que reflete o tipo principal do Pokémon.
* **Paginação**: Navegação suave entre as páginas da lista de Pokémon.
* **Interface Intuitiva**: Design limpo e responsivo, otimizado para diferentes tamanhos de tela.
* **Feedback Visual**: Botões e seletores com efeitos visuais e um indicador de carregamento de Pokeball para uma experiência aprimorada.

---
## 🛠️ Tecnologias Utilizadas

* **Vue.js 3**: Framework progressivo para a construção de interfaces de usuário.
* **TypeScript**: Para código mais robusto e menos propenso a erros.
* **Vue Router**: Para navegação entre as diferentes visualizações da aplicação (lista e detalhes do Pokémon).
* **Axios**: Cliente HTTP para fazer requisições à PokeAPI.
* **PokeAPI**: A poderosa API REST que fornece todos os dados de Pokémon.
* **Iconify/Vue**: Para ícones vetoriais personalizáveis (ex: lupa, borracha, setas).
* **CSS / SCSS**: Para estilização e responsividade da interface.

---
## 🚀 Como Rodar o Projeto

Siga estas etapas para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/get-npm) (ou [Yarn](https://yarnpkg.com/lang/en/docs/install/)) instalados.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/josevbrito/Pokemon-Insights.git](https://github.com/josevbrito/Pokemon-Insights.git)
    cd Pokemon-Insights
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

### Rodando o Servidor de Desenvolvimento

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173/` (ou outra porta indicada no seu terminal).

### Compilando para Produção
Para construir o projeto para produção:
```bash
npm run build
# ou
yarn build
```

Os arquivos de produção serão gerados na pasta `dist/`.

---

## 📂 Estrutura do Projeto
A arquitetura do projeto segue um padrão modular com componentes reutilizáveis e lógica de negócios separada.

```
Pokemon-Insights/
├── public/                # Assets estáticos
├── src/
│   ├── assets/            # Estilos globais, imagens, etc.
│   ├── components/        # Componentes Vue reutilizáveis
│   │   ├── Pokedex/       # Componentes específicos da página Pokedex
│   │   │   ├── PokedexHeader.vue
│   │   │   ├── PokemonGrid.vue
│   │   │   ├── PokedexLoading.vue
│   │   │   └── PokedexPagination.vue
│   │   └── Pokemon/       # Componentes específicos da página de detalhes do Pokémon
│   │       └── PokemonStats.vue
│   ├── pages/             # Visualizações/Páginas principais da aplicação
│   │   ├── Home.vue
│   │   ├── Pokedex.vue
│   │   ├── PokemonDetails.vue
│   │   └── NotFound.vue
│   ├── router/            # Configuração das rotas do Vue Router
│   │   └── index.ts
│   ├── services/          # Funções para interagir com a PokeAPI
│   │   └── pokeApiService.ts
│   ├── App.vue            # Componente raiz da aplicação
│   └── main.ts            # Ponto de entrada da aplicação
├── .gitignore             # Arquivos e pastas a serem ignorados pelo Git
├── index.html             # Arquivo HTML principal
├── package.json           # Dependências e scripts do projeto
├── README.md              # Este arquivo
├── tsconfig.json          # Configurações do TypeScript
└── vite.config.ts         # Configurações do Vite
```

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tiver ideias para melhorias, novas funcionalidades ou encontrar algum bug, sinta-se à vontade para:

1.  uma Issue descrevendo a sugestão ou o problema.
2. Criar um Pull Request com suas alterações.
Ao contribuir, por favor, siga as melhores práticas de codificação e certifique-se de que seus commits estejam bem descritos.

## 📄 Licença
Este projeto está licenciado sob a Licença MIT.

## 🙏 Agradecimentos
Um agradecimento especial à PokeAPI por fornecer uma API fantástica e gratuita para dados de Pokémon, que tornou este projeto possível!