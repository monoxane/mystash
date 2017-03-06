# wealthor

[![Build Status](https://travis-ci.org/jozsi/wealthor.svg)](https://travis-ci.org/jozsi/wealthor)
[![Greenkeeper badge](https://badges.greenkeeper.io/jozsi/wealthor.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/jozsi/wealthor/graph/badge.svg)](https://codecov.io/gh/jozsi/wealthor)

Personal finance app

### Requirements
- NodeJS v. 7.6.0 (or higher)
- MongoDB

### Installation Steps
- Make sure that NodeJS v.7.6.0 (or higher) is installed
- Clone (or download) the repository locally.
- Copy the `config.sample.js` file, renaming it to `config.js`. Edit the new file (`config.js`) filling in the necessary information for your local machine (e.g. the local connection to MongoDB)
- Run `npm install` in the project's folder to install dependencies
- Run `npm start` to start the server
- Visit the project in your browser (usually the address will be http://localhost:3000 if you have configured NodeJS otherwise)

### Running tests
- To run all the tests, run `npm test`
- To run a specific test:
   - If `jest` is installed globally (with `(sudo) npm install jest -g`): `jest __tests__/myfile.js`
   - If `jest` is not installed globally: `./node_modules/.bin/jest __tests__/myfile.js`
