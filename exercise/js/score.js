// 90점 ~ 100점 - A 
// 80점 ~ 90점 -  B 
// 70점 ~ 80점 -  C 
// 60점 ~ 70점 -  D 
// 60점 미만   -  F
let score;
let grade;
while (true) {
    score = prompt("점수를 입력하세요.", "1~100");
    if (score != null && score >= 90 && score <= 100) {
        grade = 'A'
        break;
    } else if (score != null && score >= 80 && score <= 90) {
        grade = 'B'
        break;
    } else if (score != null && score >= 70 && score <= 80) {
        grade = 'C'
        break;
    } else if (score != null && score >= 60 && score <= 70) {
        grade = 'D'
        break;
    } else if (score != null && score >= 0 && score <= 60) {
        grade = 'F'
        break;
    } else {
        alert("다시 입력해 주세요")
    }
}
document.write("학점은 <span class='score'>" + grade + "</span> 입니다.")