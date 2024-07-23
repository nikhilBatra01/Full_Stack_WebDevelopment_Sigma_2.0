function calculateDate(event) {
    let currentDate = new Date();
    let eventDate = new Date(event);
    let differenceDate = Math.abs(currentDate - eventDate);
    let days = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
    return days
}

console.log(calculateDate("2023-08-31"));

// When we run this function, we will have the following information printed/output  : >>>

// *******************
// *   Output : 16   *
// *******************