// 請介紹兩個字串方法跟數字方法
var str1 = 'Hello';
var str2 = 'World';

console.log(str1.concat(' ', str2));
// 宣告字串一連接到字串二 

console.log(str2.concat(', ', str1));
// 返回

//確定字符串是否以指定字符串的字符開頭，true還是false
const str = 'Saturday night plans';
console.log(str.startsWith('Sat'));



// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值
if(money >= 40000){
    console.log('乾爹');
}else if(limit >= 500000){
    console.log('太多');
}else{
    console.log('太窮');
}
