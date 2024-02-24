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

        let message = document.createElement("p");
        message.innerText = this.message;

        div.appendChild(message);
    }
}

function AddTextContainer()
{
    const CONTAINER_CLASS = "container";
    const MESSAGE = "message";

    let messageBox = new MessageBox(CONTAINER_CLASS, MESSAGE);
    messageBox.PrintMessage();
}