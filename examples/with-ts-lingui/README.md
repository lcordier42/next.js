npm i

touch locale/fr/messages.js

tsc

lingui extract && lingui compile

node_modules/.bin/babel --plugins lingui-transform-js pages/index.js -o pages/index.js

npm run dev
