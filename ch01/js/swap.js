// 변수의 값을 교환하기
let x = 35, y = 63;
let temp;

document.write("교환 전 <br>")
document.write("x="+x+", y="+y +", temp="+temp);

//교환 처리
temp = x;
x = y;
y = temp;

document.write("<br> 교환 후 <br>")
document.write("x="+x+", y="+y +", temp="+temp);