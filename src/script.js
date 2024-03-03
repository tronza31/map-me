class MessageBox
{
  constructor(divId, message)
  {
    this.divId = divId;
    this.message = message;
  }

  PrintMessage()
  {
    let div = document.getElementsByClassName(this.divId)[0];

    if (div !== null && div !== undefined)
    {
      let message = document.createElement("p");
      message.innerText = this.message;
      div.appendChild(message);
    }
    else
    {
      console.log("Container not founded");
    }
  }
}

var watchId = null;

function AddTextContainer()
{
  if (navigator.geolocation)
  {
    watchId = navigator.geolocation.watchPosition(
      function (position)
      {
        const CONTAINER_CLASS = "container";
        const MESSAGE = `${position.coords.latitude}, ${position.coords.longitude}`;

        let messageBox = new MessageBox(CONTAINER_CLASS, MESSAGE);
        messageBox.PrintMessage();
      },
      function (error)
      {
        console.log(error);
        alert("Вы запретили местоположение");
      },
    );
  }
  else
  {
    alert("У Вас отстутсвует местоположение");
  }
}

var buttonHtml = document.getElementById("action-button");

function ChangeButtonColor()
{
  if (buttonHtml.classList.contains("btn-primary"))
  {
    buttonHtml.classList.remove("btn-primary");
    buttonHtml.classList.add("btn-danger");
    buttonHtml.innerText = "Stop";
  }
  else
  {
    buttonHtml.classList.remove("btn-danger");
    buttonHtml.classList.add("btn-primary");
    buttonHtml.innerText = "Start";
  }
}

function StartGeoCoordinateWatching()
{
  buttonHtml.removeEventListener("click", StartGeoCoordinateWatching);
  buttonHtml.addEventListener("click", StopGeoCoordinateWatching);
  ChangeButtonColor();
  AddTextContainer();
  alert("Watching was run");
}

function StopGeoCoordinateWatching()
{
  buttonHtml.removeEventListener("click", StopGeoCoordinateWatching);
  buttonHtml.addEventListener("click", StartGeoCoordinateWatching);
  ChangeButtonColor();
  if (watchId !== null)
  {
    navigator.geolocation.clearWatch(watchId);
  }
  alert("Watching was stop");
}

buttonHtml.addEventListener("click", StartGeoCoordinateWatching);