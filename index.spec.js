describe('fastify-qrcode', () => {
    const fastify = require('fastify')()
    fastify.register(require('./index'))

    describe('fastify integration', () => {
        it('should register fastify-qrcode into fastify', () => {
            fastify.listen(0, () => {
                expect(fastify.qrcode).not.toBeUndefined()
            })
        })
    })

    describe('e2e', () => {
        it('should return correct data url', (done) => {
            const expectedResult = [
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4Ae',
                'waftIAAAKvSURBVO3BQY7cWAwFwXyE7n/lnF5yNh8QpCq3aUbEH6wxijVKsUYp1ijFGqVYoxRrlGKNUq',
                'xRijVKsUYp1ijFGqVYoxRrlGKNcvFQEr5J5SQJnUqXhBOVLgnfpPJEsUYp1ijFGuXiZSpvSsIdKl0SOp',
                'UnVN6UhDcVa5RijVKsUS4+LAl3qNyRhDuS0Kk8kYQ7VD6pWKMUa5RijXLxj1HpktCp/M2KNUqxRinWKB',
                'fDqHRJ+JcUa5RijVKsUS4+TOVPUumS0Kk8ofKbFGuUYo1SrFEuXpaE3yQJnUqXhE7lJAm/WbFGKdYoxR',
                'rl4iGVv5nKicrfpFijFGuUYo1y8VASOpUuCW9S6VS6JHQqXRI6lZMkvEnlk4o1SrFGKdYoFw+pdEk4Ue',
                'mScKLSJaFTeSIJf1ISOpUnijVKsUYp1igXDyWhU+mS8EQSnkhCp9Il4Q6VkyScJKFTeVOxRinWKMUa5e',
                'IPU+mS0Kk8odIl4Q6VkyTcofJJxRqlWKMUa5T4gy9KQqfSJeFNKidJuEPlTUnoVJ4o1ijFGqVYo1x8mc',
                'qJyh1J6FS6JHQqJyp3JOFE5ZuKNUqxRinWKPEHDyThm1SeSEKncpKETuWOJJyovKlYoxRrlGKNcvEylT',
                'cl4SQJncqJykkSOpUuCZ1Kl4Q7ktCpPFGsUYo1SrFGufiwJNyh8klJ6FQ6lS4Jd6jckYQ3FWuUYo1SrF',
                'EuhklCp9KpdEl4IgknKicqbyrWKMUapVijXKz/UTlJQqdykoRO5ZOKNUqxRinWKBcfpvJJKl0SuiR0Ki',
                'dJ6FQ6lS4Jv0mxRinWKMUa5eJlSfimJJyodEk4UemS0KmcqJwkoVN5U7FGKdYoxRol/mCNUaxRijVKsU',
                'Yp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlP8AKyQM6Zh1Mb8AAAAASUVORK5CYII='
            ].join('')
            try {
                fastify.listen(0, () => {
                    return fastify.qrcode.toDataURL('hello world', (e, url) => {
                        expect(url).toEqual(expectedResult)
                    })
                })
                done()
            } catch (error) {
                done(error)
            }
        })
    })
})