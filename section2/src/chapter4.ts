type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
};

let user: User = {
  id: 1,
  name: "dd",
  nickname: "dd",
  birth: "9999",
}

function func() {
  type User = {};
}

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}