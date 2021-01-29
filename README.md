# WebCP Refresh

This project aims to provide a "modern" web based control panel for the
[https://github.com/eoserv/eoserv/](EOSERV) project. It should include all of
the existing features and functionality of it's predecessor
[https://github.com/eoserv/webcp/](WebCP).

## Building

First you must install the package dependencies for the root, app, and api packages.

```
yarn
cd app
yarn
cd ../api
yarn
```

The app can then be built with

```
yarn build
```

## Running

First start the API server with

```
yarn api
```

Then start the app with

```
yarn app
```

## Deploying

## Goals

- Create an API for accessing all database record and pub files.
- Create EOSERV Account based login system
- Create a web interface allowing users to explore data files
  (Items, NPCs, etc.)
  - Allow editing those data files for privileged users.
