## Config

add a `service_account.json` file to the `functions` directory.  It should contain the credentials downloaded from the firebase console

See: https://firebase.google.com/docs/admin/setup

## Install Instructions

`npm install -g firebase-tools`

`cd functions`
`yarn install`

## GCF export

`firebase deploy`

*must be in the root directory, not in functions