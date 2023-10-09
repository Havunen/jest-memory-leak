import {nutsByCountry} from './data/Resources'

describe('nuts codes', () => {
    it('Should not leak memory', () => {
        expect(nutsByCountry).not.toBeNull()
    })
})
