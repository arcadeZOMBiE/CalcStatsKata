import { calcStats } from '../calcStats'
import { expect } from 'chai'

let CalcStats = new calcStats()

let output = CalcStats.calc([6, 9, 15, -2, 92, 11])


describe('CalcStats.calc([6, 9, 15, -2, 92, 11])', () => {
    it('should return min = -2', () => {
        expect(output).to.have.deep.property('min', -2)
    })
})

describe('CalcStats.calc([6, 9, 15, -2, 92, 11])', () => {
    it('should return max = 92', () => {
        expect(output).to.have.deep.property('max', 92)
    })
})

describe('CalcStats.calc([6, 9, 15, -2, 92, 11])', () => {
    it('should return average = 21.833333333333332', () => {
        expect(output).to.have.deep.property('average', 21.833333333333332)
    })
})

describe('CalcStats.calc([6, 9, 15, -2, 92, 11])', () => {
    it('should return count = 6', () => {
        expect(output).to.have.deep.property('count', 6)
    })
})

describe('CalcStats.calc([6, 9, 15, -2, 92, 11])', () => {
    it('should return sum = 131', () => {
        expect(output).to.have.deep.property('sum', 131)
    })
})

describe('CalcStats.calc([6, 9, 15, -2, 92, 11])', () => {
    it('should return odd', () => {
        expect(output).to.have.deep.property('oddOrEven', 'odd')
    })
})
