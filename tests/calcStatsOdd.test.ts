import { calcStats } from '../calcStats'
import { expect } from 'chai'

let CalcStats = new calcStats()
let oddoutput = CalcStats.calc([1,2,3,4,5])

describe('CalcStats.calc([1,2,3,4,5])', () => {
    it('should return min = 1', () => {
        expect(oddoutput).to.have.deep.property('min', 1)
    })
})

describe('CalcStats.calc([1,2,3,4,5])', () => {
    it('should return max = 5', () => {
        expect(oddoutput).to.have.deep.property('max', 5)
    })
})

describe('CalcStats.calc([1,2,3,4,5])', () => {
    it('should return average = 3', () => {
        expect(oddoutput).to.have.deep.property('average', 3)
    })
})

describe('CalcStats.calc([1,2,3,4,5])', () => {
    it('should return count = 5', () => {
        expect(oddoutput).to.have.deep.property('count', 5)
    })
})

describe('CalcStats.calc([1,2,3,4,5])', () => {
    it('should return sum = 15', () => {
        expect(oddoutput).to.have.deep.property('sum', 15)
    })
})

describe('CalcStats.calc([1,2,3,4,5])', () => {
    it('should return odd', () => {
        expect(oddoutput).to.have.deep.property('oddOrEven', 'odd')
    })
})
