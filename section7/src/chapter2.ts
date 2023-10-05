/**
 * map 메서드 타입 정의하기
 */

const arr = [1, 2, 3];
const newArr = arr.map(el => el * 2); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(callback(arr[i]));
  }
  
  return result;
}

map(arr, (item) => item * 2);
map(['hi', 'hello'], (item) => parseInt(item));

/** 
 * forEach 메서드 타입 정의하기
 */

const arr2 = [1, 2, 3];
arr2.forEach(el => console.log(el));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i]);
  }
}

forEach(arr2, (el) => {
  console.log(el.toFixed());
});

forEach(['a', 'b'], (el) => {
  console.log(el);
})
