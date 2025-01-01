interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
    age: 33,
    name: '세호',
}

// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 27,
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var add: SumFunction;
add = function(a: number, b: number): number {
    return a + b;
}   

// 인덱싱
interface StringArray {
    [index: number]: string;
}
var arr1: StringArray = ['a', 'b', 'c'];
arr1[0] = "10"; // 'a'  

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var objDictionary: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
objDictionary['cssFile'] = /a/; // 예시
Object.keys(objDictionary).forEach(function(value) {
    console.log(value);
})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string
}

var captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴'
}