"use strict";

const search2 = (integers) => {
  if (integers.length < 3) return;
  const odd = integers.filter((number) => number % 2 === 0);
  const even = integers.filter((number) => number % 2 !== 0);
  return odd.length > even.length ? even[0] : odd[0];

  // ONE LINE METHOD
  //   return integers.filter((number) => number % 2 !== 0).length >
  //     integers.filter((number) => number % 2 === 0).length
  //     ? integers.filter((number) => number % 2 === 0)[0]
  //     : integers.filter((number) => number % 2 !== 0)[0];
};

const search = (integers) => {
  if (integers.length < 3) return;
  const odd = [];
  const even = [];
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? even.push(integers[i]) : odd.push(integers[i]);
  }
  return even.length > odd.length ? odd[0] : even[0];
};

const search3 = (integers) => {
  if (integers.length < 3) return;
  let odd = 0;
  let even = 0;
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? (even += integers[i]) : (odd += integers[i]);
  }
  return even > odd ? odd : even;
};

const table = Array.from({ length: 1000000 }, (_, i) => (i = i + 1));

const even = table.filter((x) => x % 2 == 0);

even.push(3);

console.time("Function #1");
console.log(search(even));
console.timeEnd("Function #1"); /// Function #1: 7.661865234375 ms

console.time("Function #2");
console.log(search2(even));
console.timeEnd("Function #2"); /// Function #2: 15.35498046875 ms

console.time("Function #3");
console.log(search3(even));
console.timeEnd("Function #3"); /// Function #3: 3.956298828125 ms
