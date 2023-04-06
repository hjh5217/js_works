//let selectMenu = document.testForm.major;(폼이름)

function displaySelect(){

   //let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;

   //id 선택자 
   let selectedText = document.getElementById("major").value;

   alert(selectedText + "가 선택되었습니다.");
}