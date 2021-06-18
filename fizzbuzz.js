const fizzBuzz = function(max) {
  if(typeof(max)!=='number'){
    console.log('tipe datanya bukan number !')
  }else{
    for(let i=1; i<=max; i++){
      if(i % 3 ==0 && i % 5 ==0){
        console.log(i,"FizzBuzz")
      }else if(i%3==0){
        console.log(i,"Fizz")
      }else if(i%5==0){
        console.log(i,"Buzz")
      }else{
        console.log(i)
      }
    }
  }
}

module.exports = fizzBuzz;