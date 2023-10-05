// enum 타입, 열거형. 여러가지 값들에 각각 이름 부여해
// 열거해두고 사용하는 타입

// 숫자형 enum
// enum은 자바스크립트 컴파일 시에 사라지지 않으며 객체로 변환된다
enum Role { // 0부터 자동으로 숫자가 할당됨
  ADMIN = 10, // 10으로 하면 자동으로 +1 하면서 할당됨
  USER = 20, // 20
  GUEST, // 21
}

enum Language {
  korea = "ko",
  english = "en",
}

const user1 = {
  role: Role.ADMIN, // 0
}

const user2 = {
  role: Role.USER,
}

const user3 = {
  role: Role.GUEST,
}

console.log(user1.role, user2.role, user3.role);