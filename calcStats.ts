export class calcStats {
    calc( input: Array<number>) {
        let total = 0

        input.forEach(element => {
            total = total + element
        });

        let output = {
            min: input.sort((a,b) => a - b)[0],
            max : input.sort((a,b) => a - b)[input.length - 1],
            count : input.length,
            average : total / input.length,
            sum : total,
            oddOrEven : total % 2 ? 'odd' : 'even'
        }
        return output
    }
}