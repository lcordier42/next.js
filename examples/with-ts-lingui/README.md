```sh
npm i

touch locale/fr/messages.js

tsc

lingui extract && lingui compile

npm run dev
```

```sh
(
    set -eux

    lingui extract --clean --verbose
    lingui compile --verbose

    tsc --pretty --watch
)
```

```sh
(
    set -eux

    while true; do
        lingui extract --clean --verbose
        lingui compile --verbose
        sleep 1
    done
)
```
