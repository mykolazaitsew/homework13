const task1 = n => (n <= 1 ? n : task1(n - 1) + task1(n - 2));

console.log(task1(1)); 
console.log(task1(2)); 
console.log(task1(3)); 
console.log(task1(10)); 