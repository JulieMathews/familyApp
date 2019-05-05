# Family App

## Instructions

1. Run `npm install` to update to latest node modules.
1. Update `config/config.json` to match your local MySQL config. (TODO: this should use a local environment file so this doesn't always have to be edited.)
1. Run `npx sequelize db:migrate` to update the database to the latest schema.
1. Run `npx sequelize db:seed:all` to seed the database with the latest dummy data.
1. Run `npm start` to start the server.
1. Navigate to `http://localhost:8080/specialist-articles` to see what's been done so far.
