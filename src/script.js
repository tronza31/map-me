class MessageBox {
  constructor(divId, message) {
    this.divId = divId;
    this.message = message;
  }

  PrintMessage() {
    let div = document.getElementsByClassName(this.divId)[0];

    if (div !== null && div !== undefined) {
      let message = document.createElement("p");
      message.innerText = this.message;
      div.appendChild(message);
    } else {
      console.log("Container not founded");
    }
  }
}

function AddTextContainer() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      function (position) {
        const CONTAINER_CLASS = "container";
        const MESSAGE = `${position.coords.latitude}, ${position.coords.longitude}`;
        console.log(position);
        let messageBox = new MessageBox(CONTAINER_CLASS, MESSAGE);
        messageBox.PrintMessage();
      },
      function (error) {
        alert("Вы запретили местоположение");
      },
    );
  } else {
    alert("У Вас отстутсвует местоположение");
  }
}

function ChangeButtonColor() {
  let buttonHtml = document.getElementById("GetButton");

  if (buttonHtml.classList.contains("btn-primary")) {
    buttonHtml.classList.remove("btn-primary");
    buttonHtml.classList.add("btn-danger");
    buttonHtml.innerText = "Stop";
  } else {
    buttonHtml.classList.remove("btn-danger");
    buttonHtml.classList.add("btn-primary");
    buttonHtml.innerText = "Start";
  }
}


function StartBC() {
  ChangeButtonColor(); // Change color
  AddTextContainer(); // Call AddTextContainer
  let GetButton = document.getElementById("GetButton");
  GetButton.removeEventListener("click", StartBC);
  GetButton.addEventListener("click", StopBC);
  alert("Вы запустили отслеживание");
}

function StopBC() {
  ChangeButtonColor();
  navigator.geolocation.clearWatch(AddTextContainer); //ChangeButtonColor();
  let GetButton = document.getElementById("GetButton");
  GetButton.removeEventListener("click", StopBC);
  GetButton.addEventListener("click", StartBC);
  alert("Вы остановили отслеживание");
}



let GetButton = document.getElementById("GetButton");
GetButton.addEventListener("click", StartBC);
