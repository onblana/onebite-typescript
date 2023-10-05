/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // A의 타입은 number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // B는 number

/**
 * 제네릭과 조건부타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string타입
let varB: StringNumberSwitch<string>; // number타입

// 제네릭과 조건부타입, 함수 오버로딩을 모두 활용한 예시
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces("Hi I'm Boran !");
result.toUpperCase();

let result2 = removeSpaces(undefined);