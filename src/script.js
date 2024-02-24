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

function AddTextContainer()
{
    const CONTAINER_CLASS = "container";
    const MESSAGE = "message";

    let messageBox = new MessageBox(CONTAINER_CLASS, MESSAGE);
    messageBox.PrintMessage();
}