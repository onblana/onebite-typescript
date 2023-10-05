/** mapped type */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: 'ㅇㅇㅇ',
    age: 10,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: 'ㅇㅇㅇ',
  age: 25,
});