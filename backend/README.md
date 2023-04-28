# Interview-Backend
Please focus on production ready and clean code.

Please feel free to refactor the code as you see, while ensuring that it remains in JS/TS.

## Tasks
* Implement the existing "API endpoints" to fetch images and merge them into one response


## Build Setup
```bash
$ npm install
$ npm run start:dev
```

## Configs
 rename .env.example to .env
```bash
$ mv .env.example .env
```


## API Endpoints

```
https://my-json-server.typicode.com/icedrone/json-demo-server/photos
https://my-json-server.typicode.com/icedrone/json-demo-server/images
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# 1. Create .env file 
$ touch .env

# 2. Copy content from .env.example with your modifications manually

# 3. Run postgres db on docker 
$ docker compose up 

# 4. Run migrations
$ npm run typeorm:run

# 5.1 Run development
$ npm run start

# 5.2 Run development in watch mode
$ npm run start:dev

# 5.3 Run in production mode
$ npm run start:prod
```

## Development tips

```bash
# Create migration
$ npm run typeorm:create --name={MigrationName} 

# Generate auto migration
$ npm run typeorm:generate --name={MigrationName} 

# Revert migration
$ npm run typeorm:revert
```