import { calcStats } from '../calcStats'
import { expect } from 'chai'

let CalcStats = new calcStats()
let output = CalcStats.calc([1,2,3,4])

describe('CalcStats.calc([1,2,3,4])', () => {
    it('should return min = 1', () => {
        expect(output).to.have.deep.property('min', 1)
    })
})

describe('CalcStats.calc([1,2,3,4])', () => {
    it('should return max = 4', () => {
        expect(output).to.have.deep.property('max', 4)
    })
})

describe('CalcStats.calc([1,2,3,4])', () => {
    it('should return average = 2.5', () => {
        expect(output).to.have.deep.property('average', 2.5)
    })
})

describe('CalcStats.calc([1,2,3,4])', () => {
    it('should return count = 4', () => {
        expect(output).to.have.deep.property('count', 4)
    })
})

describe('CalcStats.calc([1,2,3,4])', () => {
    it('should return sum = 10', () => {
        expect(output).to.have.deep.property('sum', 10)
    })
})

describe('CalcStats.calc([1,2,3,4])', () => {
    it('should return even', () => {
        expect(output).to.have.deep.property('oddOrEven', 'even')
    })
})
