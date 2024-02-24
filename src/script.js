class MessageBox
{
    constructor(divId, message)
    {
        this.divId = divId;
        this.message = message;
    }

    PrintMessage()
    {
        let div = document.getElementById(this.divId);

        let message = document.createElement("p");
        message.innerText = this.message;
        
        div.appendChild(message);
    }
}