function addContents() {
  // <p></p>
  let newP = document.createElement("p");
  let text = document.createTextNode("은은하고 다채로운 꽃향");
  newP.appendChild(text);
  document.getElementById("info").appendChild(newP);

  let newImg = document.createElement("img");
  let src = document.createAttribute("src");
  // <img src="" alt="">
  //src 속성
  src.value = "./images/coffee-blue.jpg";
  newImg.setAttributeNode(src);
  //alt 속성
  let alt = document.createAttribute("alt");
  alt.value = "커피";
  newImg.setAttributeNode(alt);

  //div 태그안에 img 태그 포함
  document.getElementById("info").appendChild(newImg);
}
