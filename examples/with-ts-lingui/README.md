npm i

touch locale/fr/messages.js

tsc

BABEL_ENV=lingui lingui extract && lingui compile

BABEL_ENV=node node_modules/.bin/babel pages/index.js -o pages/index.js

npm run dev
