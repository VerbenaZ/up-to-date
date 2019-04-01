const SumUp = (input) => {
    let sum = 0;
    for (let index = 0;
         index < input.length; index++)
    {sum = sum + input [index]};
    return sum; 
}

module.exports = SumUp;
// console.log(SumUp([1, 2, 3, 4]));
