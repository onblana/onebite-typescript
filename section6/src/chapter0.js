/**
 * 클래스
*/

let studentA = {
  name: "ran",
  grade: "A",
  age: 22,
  study() {
    console.log("공부했다");
  },
  introduce() {
    console.log("ㅎㅇ");
  },
}

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  introduce() {
    console.log(`안녕? 내 이름은 ${this.name}이야!`);
  }

  study() {
    console.log('공부함...');
  }
}


class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // super(부모) class의 생성자를 호출하는 함수 super
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// studentB는 Student의 인스턴스
// let studentB = new Student("김김김", "B", 33);
// studentB.introduce();
// studentB.study();

let studentC = new StudentDeveloper("컴컴컴", "C", 44, "C++");
studentC.introduce();
studentC.study();
studentC.programming();
