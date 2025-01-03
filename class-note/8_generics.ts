// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const strGeneric = logText<string>('하이');
strGeneric.split('');

const numberGeneric = logText<number>(10);
numberGeneric.toLocaleString();

const booleanGeneric = logText<boolean>(true);
booleanGeneric.valueOf();

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = { value: 'abb', selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2('abc');

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem> (itemOption: T): T {
    return itemOption;
}

getShoppingItemOption('name');