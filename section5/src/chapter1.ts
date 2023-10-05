/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Cat extends Animal {
  isMeow: boolean;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface CatDog extends Cat, Dog {
  color: string;
}

const dog: Dog = {
  name: "name",
  age: 0,
  isBark: true,
}

const catdog: CatDog = {
  name: "catdog",
  age: 100,
  isBark: true,
  isMeow: true,
  color: "orange",
}