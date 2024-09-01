const chatContainer = document.getElementById("chat");

function addMessage(user, message, color) {
  if (user === "Nightbot") {
    return;
  } else {
    const messageId = `message-${Date.now()}`;
    const messageElement = `
                    <div id="${messageId}" class="message">
                        <span style="color: ${
                          color || "#000"
                        };">${user}: </span>
                        ${message}
                    </div>
                `;
    chatContainer.insertAdjacentHTML("beforeend", messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
      const elementToRemove = document.getElementById(messageId);
      if (elementToRemove) {
        elementToRemove.classList.add("fade-out");
        setTimeout(() => {
          if (elementToRemove) {
            chatContainer.removeChild(elementToRemove);
          }
        }, 500);
      }
    }, 100000);
  }
}

function getChannelNameFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("channel");
}

// Initialize ComfyJS with the channel name from the URL
const twitchChannel = getChannelNameFromUrl();
if (twitchChannel) {
  ComfyJS.onChat = (user, message, flags, self, extra) => {
    const color = extra.userColor || "#000";
    addMessage(user, message, color);
  };
  ComfyJS.Init(twitchChannel);
} else {
  console.error("No Twitch channel name provided in the URL.");
}
