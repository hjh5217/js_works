window.onload = function () {
  let id = document.getElementById("id");
  let pw = document.getElementById("pw");
  let pwCheck = document.getElementById("pwCheck");
  let email = document.getElementById("email");

  id.onchange = checkId;
  email.onchange = checkEmail;
  pw.onchange = checkPw;
  pwCheck.onchange = comparePwCheck;

  function checkId() {
    if (id.value.length < 4 || id.value.length > 15) {
      alert("4~15자리의 영문과 숫자로 입력해주세요");
      id.select();
    }
  }
  //   function checkEmail(email) {
  //     if (validEmailCheck(email) == false) {
  //       alert("올바른 이메일 주소를 입력해주세요.");
  //       email.value = "";
  //       email.focus();
  //       return false;
  //     }
  //   }
  // ^ = 아니다
  //   function validEmailCheck(e) {
  //     var pattern =
  //       /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //     return obj.value.match(pattern) != null;
  //   }
  function checkPw() {
    if (pw.value.length < 8) {
      alert("비밀번호는 8자리 이상이어야 합니다.");
      pw.value = "";
      pw.focus();
    }
  }
  function comparePwCheck() {
    if (pw.value != pwCheck.value) {
      alert("비밀번호가 일치하지 않습니다.");
      pwCheck.value = "";
      pw2.focus();
    }
  }
};
