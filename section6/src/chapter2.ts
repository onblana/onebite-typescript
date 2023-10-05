/** 
 * 접근 제어자 access modifier
 * => public, private, protected
 * 
 * 아무것도 안 쓰면 public이 default
 * private는 해당class내에서만 접근가능, 파생 클래스(subclass)에서 접근 불가.
 * protected는 해당class내에서 접근가능 + 파생 클래스에서도 접근 가능
 */

class Employee {
  // 필드
  private name: string;
  protected age: number;
  position: string;

  // 생성자. 생성자에는 접근제한자를 달면 필드와 중복되므로 달지 않는다.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('근무했음');
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  func() {
    // this.name; // private이므로 subclass에서 접근불가
    this.age;
  }
}

const employee = new Employee("김박박", 29, "developer");
employee.position = "디자이너"; // public이므로 외부에서도 접근가능
console.log(employee);