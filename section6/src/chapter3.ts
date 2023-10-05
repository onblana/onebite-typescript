/** 
 * interface와 class
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implements 구현하는
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number, private extra: string) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move(): void {
    console.log(`${this.moveSpeed}의 속도로 이동`);d
  };
}