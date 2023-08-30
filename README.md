<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://cdn.sanity.io/images/fvhcpakg/production/ead1fb6ad2aabab8247446f15c2502684e523123-600x782.jpg?auto=format&q=60" width="200" alt="Nest Logo" /></a>
</p>


## Description

Banksy - a mock api to give banking data (accounts, transactions etc).

## Installation

```bash
$ nvm use
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# dev mode
$ npm run start:dev
```
At this point a local sqlite db will be created for local development. (not for production use)
You can then seed this db with some test data using:
```bash
$ ./seed.sh
```
This script will inject some accounts and transactions to play with.

## Test

```bash
# unit tests
$ npm run test
