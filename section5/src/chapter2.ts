/** 
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 0,
};

/**
 * 모듈 보강
 */

// lib이라는 객체를 제공하는 라이브러리가 있다고 가정

// 라이브러리 내에 정의되어 있는 interface
interface Lib {
  a: number;
  b: number;
}

// 프로퍼티를 추가하여 보강하기 위해 중복 정의하는 interface
interface Lib {
  c: string,
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
}