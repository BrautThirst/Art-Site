var description = "Divisible by 3, or 5, or neither"

function fizzbuzz(number) {
    if (number % 3 === 0) {
        console.log("Divisible by 3!")
    } else if (number % 5 === 0) {
        console.log("Divsibile by 5!")
    } else {
        console.log("Loser")
    }
}

fizzbuzz(3)