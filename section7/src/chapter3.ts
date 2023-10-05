/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용할 때는 타입을 정의할 때 타입변수(K, V)에 할당할 타입을 꺽쇠와 함께 써야 한다(?)
// K, V는 Type변수 혹은 제네릭타입변수, Generic Type Parameter라고 부르기도 함. TS공식문서에는 Type변수라고 되어있다

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['a'],
};

/**
 * 인덱스 시그니처 Index Signature
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

// 제네릭 인덱스 시그니처를 쓰면 더 유연한 객체 타입을 정의할 수 있다.
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'value',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭 (type)
 * 제네릭 인터페이스랑 문법만 다르고 거의 비슷하다고 생각하면 된다
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * => 유저 관리 프로그램
 * => 유저구분: 학생유저 / 개발자유저
 */

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

// Student, Developer는 type이 string literal로 각각 다르므로 서로소 집합임
// 유니온으로 묶으면 서로소 유니온 타입이 되어 타입 좁히기에 유용한데 profile: Student | Developer
// 여기선 제네릭인터페이스를 사용한다

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== 'student') { // 타입가드 - 제네릭인터네이스를 쓰면서 필요없어짐
  //   console.log("학생이 아닙니다");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: '김개발',
  profile: {
    type: 'developer',
    skill: 'TS',
  },
};

const studentrUser: User<Student> = {
  name: '김학생',
  profile: {
    type: 'student',
    school: '가톨릭대',
  },
};
