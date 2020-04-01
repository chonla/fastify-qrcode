# fastify-qrcode

Fastify QR Code plugin utilizes [qrcode](https://github.com/soldair/node-qrcode) npm package written by Ryan Day and contributors to generate QR Code.

## Usage

```
const fastify = require('fastify')

fastify.register(require('@chonla/fastify-qrcode'))

// Generate qrcode
fastify.qrcode.toDataURL('test', (error, url) => {
    console.log(url)
})
```

## License

[MIT](LICENSE)