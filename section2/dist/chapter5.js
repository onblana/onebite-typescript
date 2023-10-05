// enum 타입, 열거형. 여러가지 값들에 각각 이름 부여해
// 열거해두고 사용하는 타입
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 20] = "USER";
    Role[Role["GUEST"] = 21] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korea"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    role: Role.ADMIN, // 0
};
const user2 = {
    role: Role.USER,
};
const user3 = {
    role: Role.GUEST,
};
console.log(user1.role, user2.role, user3.role);
export {};
