/**
 * 타입스크립트의 클래스
 */

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("근무했음");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  };
}

const employee2 = new Employee("김어쩔", 34, "개발자");
console.log(employee2);

// class는 하나의 타입으로도 사용할 수 있다
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {}
}