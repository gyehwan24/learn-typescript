function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100); 

// 유니온타입
function logMessage2(value: string | number) {
    // 타입 가드를 통해 특정 타입으로 좁혀나갈 수 있음
    if(typeof value === 'number') {
        value.toLocaleString();  // if value is number, it can use toLocaleString()
    }
    if(typeof value === 'string') {
        value.toString();  // if value is string, it can use toString()
    }
    throw new TypeError('value must be string or number');
}
logMessage2('hello');
logMessage2(100);

interface Developer2 {
    name: string,
    skill: string,
}

interface Person {
    name: string,
    age: number,
}

// 유니온 타입
function askSomeoneUnion(somone: Developer2 | Person) {
    // 공통 속성만 접근 가능
    somone.name;
    // somone.age; // error
    // somone.skill; // error
}

function askSomoneInterSection(somone: Developer2 & Person) {
    // 모든 속성에 접근 가능
    somone.name;
    somone.age;
    somone.skill;
}