# Podcaster App

## Tools

- Vite: Frontend build tool
- React & Typescript: Framework with strict typing
- React Router Dom: Navigation management
- Redux Toolkit: Store management
- Chackra UI: Component library
- Vitest: Unit tests
- Axios: Handle http requests
- Commitizen, Commitlint, Committiquete: Provide a user interface to handle
  commits with conventional commits

## Run the application

### Install dependencies

```
yarn install && yarn prepare
```

### Run app in dev mode

```
yarn dev
```

### Run app in prod mode

```
yarn build && yarn preview
```

### Run tests

```
yarn test
```

### Contribute with commits

- This will run husky tool to check commits and commitizen to launch the user
  interface for commits

```
git add .
yarn commit
git push
```
