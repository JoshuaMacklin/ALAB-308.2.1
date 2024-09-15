// Exercises

// Count down to 0 from a given number.
{
    let num = 3
  
    while(num >= 0){
      console.log(num)
      num--
    }
  }
  // Log integers in multiples of 3 as long as they are less than 35.
  // Can only input number less than 35
  {
    let num = 40
    let i = 35
  
    while(num < 35) {
      if (num % 3 == 0){
        console.log(num)
      }
      num++
    }
  }
  // Print integers in multiples of 5 as long as they are less than 100.
  // Print integers between 0 and 20 with the following conditions:
  
  // All numbers divisible by 2 should be multiplied by 3 before they are output.
  // All other integers should not be output.
  // Print all prime numbers between 0 and 20.