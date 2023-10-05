/**
 * 제네릭 Generic
 */

// 일반 함수
function func(value: string | number) {
  return value;
}

func(10);
func("str");

// 제네릭 함수
function genericFunc<T>(value: T): T {
  return value;
}

let bool = genericFunc(true);
let str = genericFunc("str");
let arr = genericFunc<[number, number, number]>([0, 1, 2]);