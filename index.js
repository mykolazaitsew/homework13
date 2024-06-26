const task1 = n => (n <= 1 ? n : task1(n - 1) + task1(n - 2));


console.log(task1(3)); 
console.log(task1(7));
console.log(task1(10)); 
console.log(task1(20)) 

const task2 = (num, steps = 0) => {
    const isPalindrome = (n) => {
      const str = n.toString();
      return str === str.split('').reverse().join('');
    };
  
    const reverseNum = (n) => {
      return parseInt(n.toString().split('').reverse().join(''), 10);
    };
  
    if (isPalindrome(num)) {
      return { result: num, steps };
    }
  
    if (steps > 1000) {
      return { result: 'No palindrome found', steps };
    }
  
    const nextNum = num + reverseNum(num);
    return task2(nextNum, steps + 1);
  };
  
  console.log(task2(196));
  console.log(task2(96));

  let variantsArr = [];
  let usedChars = [];

function task3(input) {
  let chars;
  input.forEach((num, index) => {
    chars = input.splice(index, 1)[0];
    usedChars.push(chars);

    if (input.length == 0) {
      variantsArr.push(usedChars.slice());
    }
    task3(input);
    input.splice(index, 0, chars);
    usedChars.pop();
  });
  return variantsArr;
}

console.log(task3([1, 2, 3]));
  
