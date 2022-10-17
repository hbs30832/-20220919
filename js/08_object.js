/* 
    객체 : 여러 데이터를 키와 밸류 쌍으로 작성하는 형태
*/
let user = {
  age: 30,
  name: "seok",
  height: 173,
};

// 객체의 프로퍼티를 참조
console.log(user.age);

// 객체의 프로퍼티에 다른 값 할당
user.age = 31;
console.log(user.age);
user.nickname = "cocacola"; // 객체에 없는 프로퍼티 할당 가능

console.log(user.nickname);

// 객체[속성명]의 형태로 참조
console.log(user["age"]);

// 객체에 없는 프로퍼티 참조하면 undefined 출력
console.log(user.weight);
// undefined에 프로퍼티 참조하면 오류 발생
console.log(user.weight.num);
