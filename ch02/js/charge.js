let age = prompt("나이를 입력하세요.", "1");
age = parseInt(age);
let charge;

if (age != null && age < 8) {
    document.write("취학전 아동입니다.<br>");
    charge = 1000;
    document.write("입장료는 <span class='access'> " + charge + "원</span> 입니다");
} else if (age != null && age >= 8 && age < 14) {
    document.write("초등학생 입니다.<br>");
    charge = 2000;
    document.write("입장료는 <span class='access'> " + charge + "원</span> 입니다");
} else if (age != null && age >= 14 && age < 20) {
    document.write("중고등학생 입니다.<br>");
    charge = 3000;
    document.write("입장료는 <span class='access'> " + charge + "원</span> 입니다");
} else if (age != null && age >= 20) {
    document.write("성인 입니다.<br>");
    charge = 4000;
    document.write("입장료는 <span class='access'> " + charge + "원</span> 입니다");
} else{
    document.write("입력이 취소되었습니다.");
}

