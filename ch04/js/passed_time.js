//Date 객체 생성
//현재일
const date = new Date();
//1월 1일
let theDay = new Date("2023-1-1");

//지나온 날 = 오늘 - 1월 1일
let passedTime = date.getTime() - theDay.getTime();

//일로 환산
document.getElementById("day").innerText = Math.round(
  passedTime / (24 * 60 * 60 * 1000)
);

/*
1초는 1000 밀리초
1분은 1000 * 60 = 60000밀리초
1시간은 1000 * 60 * 60 = 3,600,000 밀리초
1일은 1000 * 60 * 60 * 24 = 86,400,000 밀리초
 */
