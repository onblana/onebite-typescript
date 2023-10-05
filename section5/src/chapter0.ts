// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void; //sayHi메서드. 메소드 오버로딩을 구현 시에는 화살표 함수가 아니라 호출시그니처를 사용할 것.
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "",
  sayHi: function () { 
    console.log("Hi");
  },
}

// person.name = ""; // name이 readonly이므로 error발생

//interface로 만든 Person같은 객체의 타입을 인터섹션이나 유니온에 이용해야한다면
// 타입 별칭에 활용하거나, 타입 주석에 활용해야 한다
type Union1 = number | string;
type Intersection1 = number & string;

// 타입 별칭에 활용
// type Union1 = number | string | Person;
// type Intersection1 = number & string | Person;

// 타입 주석에 활용(Person | number)
// const person: Person | number = {
//   name: '',
//   sayHi: function () {
//     console.log('Hi');
//   },
// };