const chatbody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");

const userData = {
    message : null
}

//Create message element with dynamic classes and return it
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
};

//Handle outgoing user messages
const handleOutgoingMessage = (e) => {
    //preventing the form from submitting
    e.preventDefault();
    userData.message = messageInput.value.trim();

    //clearing the text area after the message is sent
    messageInput.value = "";

    //Create and display user message
    const messageContent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
    chatbody.appendChild(outgoingMessageDiv);
};

// Handle enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage) {
        handleOutgoingMessage(e);
    }
});

sendMessageButton.addEventListener("click", (e) => {
    handleOutgoingMessage(e);
})