type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  //  key는 결과적으로 "name" | "age"가 됨
  return person[key];
}

const person = {
  name: "ㅇㅇㅇ",
  age: 0,
};

getPropertyKey(person, "name"); // ㅇㅇㅇ