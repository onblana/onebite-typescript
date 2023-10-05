let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['a', 'b', 'c'];

let boolArr: Array<boolean> = [true, false, true];

let multiArr: (string | number)[] = [1, 'a'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플: 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 배열 메소드 사용 시에는 튜플 제한이 발동하지 않음
// 튜블 사용 시에는 배열 메소드 사용에 주의해야 함
tup1.push(1);

// 튜플을 유용하게 사용할 수 있는 상황
const users: [string, number][] = [
  ['ㅇㅇㅇ', 1],
  ['ㄷㄷㄷ', 2],
  ['ㄱㄱㄱ', 3],
  // [5, "ㅂㅂㅂ"], // 에러
];
