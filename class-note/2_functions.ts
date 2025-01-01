// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}

sum(10, 29);

// 함수의 옵셔널 파라미터(?), 물음표를 작성하면 옵션값이 됨. 필수X
function log(a: string, b?: string) {

}

log('hello world')
log('hello ts', 'abc')