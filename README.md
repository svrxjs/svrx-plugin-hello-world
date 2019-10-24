# svrx-plugin-hello-world

hello world example for [svrx](https://github.com/x-orpheus/svrx) plugin

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**


### cli

```sh
svrx -p hello-world?user=orpheus
```

### manual

```js
const svrx = require('svrx');

svrx({ plugins: [ 'hello-world' ] }).start();
```

## Options

- user: `user`, example param
