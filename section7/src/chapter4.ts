/**
 * 제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {
    // this.list = list;  // constructor에 private접근제한자가 붙어있으면 자동으로 해줘서 생략가능
  }

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

// 만약 StringList 클래스가 필요하다면 복사해서 고쳐줘야 하는데, 제네릭 클래스로 만들면 간편함

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]);
numberList2.pop();
numberList2.push(4);
numberList2.print();

// 제네릭 클래스는 제네릭인터페이스/제네릭타입변수와는 다르게
// <>로 타입을 명시해주지 않아도 자동으로 추론한다.

const stringList = new List/*<string>*/(['a', 'b', 'c']);
stringList.push("hell");