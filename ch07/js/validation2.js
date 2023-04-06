//유효성 검사

//id 선택자 사용
// id="id"   -> let id = document.getElementById("id")

//name 속성 사용
// name="id" -> let id = document.regForm.id //폼이름

function checkMember() {
  let form = document.regForm;
  let id = form.uid;
  let pw = form.pw;
  let pwCheck = form.pwCheck;
  let email = form.email;

  let pwPattern = /^[0-9a-zA-Z!@#$%^&*]+$/;
  if (id.value.length < 4) {
    alert("아이디는 4~15자까지 가능합니다.");
    id.select();
    return false;
  } else if (email.value == "") {
    alert("이메일은 필수 입력 항목입니다.");
    email.select();
    return false;
  } else if (pw.value.length < 8 || !pwPattern.test(pw.value)) {
    alert("비밀번호는 특수문자를 제외한영문자, 숫자 포함 8자 이상입니다.");
    console.log(pwPattern.test(pw.value));
    console.log(pw.value.length);

    pw.select();
    return false;
  } else if (pw.value != pwCheck.value) {
    alert("비밀번호가 다릅니다.");
    pwCheck.select();
    return false;
  } else {
    alert("넘어감");
    form.submit();
  }
}
