# Getting Started
- `git clone https://github.com/predialize/hands-on.git`
- `cd hands-on`

# Run
## Docker Compose
- `docker-compose up --build -d`

## NPM/Node (v <= 14.*)
- `cd app && npm start`
- `cd api && npm start`

## NPM/Node (v > 14.*)

### Unix
- Alterar script start do app para: `export SET NODE_OPTIONS=--openssl-legacy-provider && ng serve`

### Windows
- Alterar script start do app para: `SET NODE_OPTIONS=--openssl-legacy-provider && ng serve`
