npm i

tsc

touch locale/fr/messages.js

BABEL_ENV=lingui lingui extract && lingui compile

BABEL_ENV=node node_modules/.bin/babel pages/index.js -o pages/index.js

npm run dev

