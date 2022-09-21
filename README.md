# Pokedex

https://pokedex-react-pixeleate.vercel.app/

https://user-images.githubusercontent.com/1545853/191538524-869c5ce8-7f36-424a-8dc2-468adcc83d4c.mov

This is a `Web App` that was built using `React (Next.js)`, `Typescript` and `Tailwindcss`, a few other libraries were used like `zod`, `cypress`, `heroicons`, `headlessui`.

When the app starts a Pokemon is rendered, specifically the first Pokemon available in the API (PokeAPI), the app detects the predominat color in the Pokemon image an uses this color as background color, in the left side we can see a paginated list which allows the user to move to the user to different pages 10 results by 10 results, if the users clicks on a Pokemon name the Pokemon will show up on the screen, the background will be adjusted algon with the stats, there is an `Add Pokemon feature` which allows the user to add a new Pokemon to the existing list.

## Concepts covered

- Component Composition
- Presentational Components
- Types ( using zod and Typescript)
- Styling
- Custom hooks (usePokemon, usePaginatedFetch)

## How to run the app

- `yarn install`

- `yarn dev`

When adding a Pokemon only 3 domains for images are allow `raw.githubusercontent.com`, `images.unsplash.com`, `scarletviolet.pokemon.com`

## How to run the tests

There is only one tests mostly implemented to show how to setup tests using Cypress, the test will verify that the first Pokemon is rendering and will also verify that when another Pokemon is selectec from the paginated list the new Pokemon is showing up.

- `yarn e2e:headless`

## Add Pokemon feature

This is a feature that is not available via the PokeAPI so all the logic is implemented in the frontend and the changes will be removed if the page is hard refreshed.

### How it works

There is a Plus button that opens a Modal window with a form where you can add details about your new Pokemon, once the form is submited the new Pokemon is stored in the Local stated and passed to the Navigation that way the new Pokemon is accessible, the new Pokemons are marked with a start in the Navigation, once the Pokemon is selected the new Pokemon data is passed to the Details componet and the Pokemon is visible on the screen, no network request are made during this process.

## TODO

- [ ] More testing, including unit testing
- [ ] Accessibility, the app has a score of 86% it could be close to 100%
- [ ] The app is not responsive
- [ ] Using a State Management library could help to centralize the state of the app
