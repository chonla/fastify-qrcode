const fp = require('fastify-plugin')
const qrcode = require('qrcode')

const plugin = (fastify, opts, done) => {
    fastify.decorate('qrcode', qrcode)
    done()
}

module.exports = fp(plugin, {
    fastify: '>=1.0.0',
    name: 'fastify-qrcode'
})