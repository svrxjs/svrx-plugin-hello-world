svrx-plugin-hello-world
---

[![svrx](https://img.shields.io/badge/svrx-plugin-%23ff69b4?style=flat-square)](https://svrx.io/)
[![npm](https://img.shields.io/npm/v/svrx-plugin-hello-world.svg?style=flat-square)](https://www.npmjs.com/package/svrx-plugin-hello-world)

The svrx plugin for hello-world

## Usage

> Please make sure that you have installed [svrx](https://svrx.io/) already.

### Via CLI

```bash
svrx -p "hello-world?user=svrxjs"
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: [ 'hello-world' ] }).start();
```

## Options

- auto: `boolean`,auto jump to the markdown you are editing. default is `svrx`

## License

MIT