describe('fastify-qrcode', () => {
    describe('fastify integration', () => {
        const fastify = require('fastify')()

        it('should register fastify-qrcode into fastify', () => {
            fastify.register(require('./index'))

            fastify.listen(0, () => {
                expect(fastify.qrcode).not.toBeUndefined()
            })
        })
    })
})