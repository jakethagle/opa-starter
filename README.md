# OPA Starter

## Prismatic Setup

- Setup Custom Component

  ```bash
  cd api-example-component && npm i && npm run build && prism component:publish --no-confirm
  ```

- Import integration

  ```bash
  prism integrations:import -p OPA-Starter.yml
  ```

- Create a customer in Prismatic

  ```bash
  prism customers:create 'Acme Co'
  ```

## API Server Setup

- Install and start the express server

  ```bash
  cd api-example-server && pnpm i && pnpm run
  ```

## OPA Setup

- Run the init.sh script to initialize the OPA Agent

  ```bash
  ./init.sh 'Acme Co'
  ```
