# Pokemon Insights

Pokemon Insights is a web application developed in React that utilizes the PokeAPI to provide detailed information about Pokémon. The application allows users to explore a list of Pokémon, view individual details, and learn about different Pokémon types.

## Features

- View a list of Pokémon.
- Obtain details of each Pokémon, including height, weight, and types.
- Navigate through Pokémon types and their characteristics.
- Responsive and user-friendly design.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for routing management.
- **Axios**: Library for making HTTP requests.
- **PokeAPI**: RESTful API that provides data about Pokémon.

## Project Structure

The project structure is as follows:

```
pokemon-insights/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CardItem.js
│   │   ├── CardPokemon.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Spinner.js
│   ├── css/
│   │   ├── home/
│   │   │   └── Home.css
│   │   ├── item/
│   │   │   ├── CardItem.css
│   │   │   ├── Items.css
│   │   │   └── ItemsDetails.css
│   │   ├── layout/
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── NotFound.css
│   │   │   └── Spinner.css
│   │   ├── pokedex/
│   │       ├── CardPokemon.css
│   │       ├── Pokedex.css
│   │       ├── PokemonDetails.css
│   │       └── Types.css
│   ├── pages/
│   │   ├── home/
│   │   │   └── Home.js
│   │   ├── item/
│   │   │   ├── Items.js
│   │   │   └── ItemsDetails.js
│   │   ├── others/
│   │   │   └── NotFound.js
│   │   └── pokedex/
│   │       ├── Pokedex.js
│   │       └── PokemonDetails.js
│   ├── services/
│   │   ├── itemApiService.js
│   │   └── pokeApiService.js
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
└── package.json

```

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/josevbrito/pokemon-insights.git
```

2. Navigate to the project directory:
```bash
   cd pokemon-insights
```

3. Install the dependencies:
```bash
   npm install
```

4. Start the application:
```bash
   npm start
```

The application will open at http://localhost:3000.

## Usage

- Upon accessing the application, you will see the homepage with a navigation menu.
- Click on "Pokedex" to view the list of Pokémon.
- Select a Pokémon to see specific details such as height, weight, and types.
- Navigate between pages using the navigation menu.

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For questions or suggestions, please reach out:

- Name: José Brito
- Email: josevictorbritoc@gmail.com
