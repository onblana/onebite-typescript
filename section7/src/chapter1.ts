/**
 * 제네릭 함수 응용 - 타입 변수 응용 3가지 사례
 */

// 첫번째 사례 =======================================================
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2); // T는 string, U는 number로 할당

// 두번째 사례 =======================================================

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, "a", "b", "c"]); // str은 number | string으로 추론됨

// 두번째 사례 변형
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num2 = returnFirstValue2([0, 1, 2]);
let str2 = returnFirstValue2([1, 'a', 'b', 'c']); // str2가 number로 추론됨

// 세번째 사례 ========================================================
// number 타입인 length를 갖고 있는 타입만 제네릭으로 들어올 수 있게 제한함. 와우
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
