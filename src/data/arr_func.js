
// console.log('javascript arr 관련 함');

let arr = [10, 20, 30, 40];

arr.map(() => {
    console.log('arr map');
})

arr.forEach((v) => {
    console.log('forEach ' + v);
})

arr.map((item) => {
    console.log('arr map ' + item);
})

arr.map((item, index) => {
    console.log('arr map item: ' + item + ' index:' + index);
})

let result1 = arr.map(() => {
                    return 99;
                });
console.log(result1);

let result2 = arr.map((item) => {
                    return item + 100;
                });
console.log(result2);

let result3 = arr.map((item) => {
                    return '가지고 있는 값 : ' + item;
                });
console.log(result3);

let menuArr = ['우동', '라면', '김밥'];
let result4 = menuArr.map((menu)=>{
    return '<p>'+menu+'</p>';
})
console.log(result4);

let result5 = menuArr.map((menu)=>'<p>'+menu+'</p>')
console.log(result5);


arr = [10,20,30,40];

let result7 = arr.filter((value)=>{
    // return true;
    return value > 10;
})
console.log(result7);

let result8 = arr.filter((value)=>{
    // return value != 30;
    return value == 30;
})
console.log(result8);

let result10 = arr.find((value)=> {
    return value==20;
})
console.log(result10);

let result11 = arr.findIndex((value)=> {
    return value==20;
})
console.log(result11);

let arr2 = [10, 20, 30];
console.log(arr2[2]);

let [n1, n2, n3] = [77, 88, 99];
console.log(n1, n2, n3);

let [num, setNum] = [77, 88];

let obj = {
    num1: 30,
    num2: 50
}

let obj2 = obj;
console.log(obj2.num1);

let {num1, num2} = obj;
console.log(num1, num2);