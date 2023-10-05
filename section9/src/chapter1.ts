/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // a는 string
let b: StringNumberSwitch<string>; // b는 number