//'y' 키를 누르면 "계속 반복합니다.", 'n'키를 누르면 "반복을 중단합니다." 그 이외의 키는 "키를 잘못 눌렀습니다."

while (true) {
    let key = prompt("계속 반복할까요?", "y/n");
    if (key != null && (key == "y" || key == "Y")) {
        alert("계속 반복합니다.");
        console.log("계속 반복합니다.");
    } else if (key != null && (key == "n" || key == "N")) {
        alert("반복을 중단합니다.");
        console.log("반복을 중단합니다.");
        break;
    } else {
        alert("y/n 만 입력 해 주세요.");
    }
}
document.write("프로그램 종료");
