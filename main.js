const myImage = document.querySelector("img"); // a troca do maxwel e o homer ao clicar//

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/maxwell-cat.jfif") {
    myImage.setAttribute("src", "imagens/romero-bailando.gif");
  } else {
    myImage.setAttribute("src", "imagens/maxwell-cat.jfif");
  }
};

// esse abaixo é a mensagem de boas vindas personalizada //
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bem-vindo, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Olá, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();

  }
