let n1 = parseFloat(prompt("첫번째 수 입력: ", "1~50"))
let n2 = parseFloat(prompt("두번째 수 입력: ", "1~50"))
let sumValue;
sumValue = n1 + n2;
document.write("두 수의 합 : " + sumValue.toFixed(2));
//toFixed 는 n번째 소수점 자리까지 보이게 하는 함수