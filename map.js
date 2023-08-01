const numbers = [4,6,8,10];


const output = [];

for(const number of numbers){
    const result = number*2;
    output.push(result)
}


// console.log(output)



// mapping method ;

const double = number =>{
    return number*2;
}



const out = numbers.map(number=>number*2);
console.log(out)


// basically map ekhane jeta kortece seta holo , kono ekta array k loop chaalai result niye kaaj kore than seta k notun ekta array te push kore return kore dei