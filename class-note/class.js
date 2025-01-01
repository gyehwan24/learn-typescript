function Person(name, age) {
    this.name = name;
    this.age = age;
}
var captain = 
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var gyehwan = new Person('Gyehwan', 27); // 생성 되었습니다.
console.log(gyehwan); // Person { name: 'Gyehwan', age: 27 }

