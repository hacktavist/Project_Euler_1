var sum = 0,
    i;
for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log('Sum of numbers is %d', sum);