const chatContainer = document.getElementById("chat-container");

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

addMessage("ZeldaFan92", "Trop hâte de voir le prochain boss !", "#8A2BE2");
addMessage(
  "GamerDudeX",
  "Est-ce que quelqu'un a déjà essayé cette stratégie ?",
  "#FF4500"
);
addMessage("ChillVibes", "Vous êtes tous les bienvenus ici ! 🍕", "#32CD32");
addMessage("PixelPrincess", "La musique de ce jeu est incroyable !", "#FF69B4");
addMessage("MisterMeme", "Les memes du jeu sont hilarants !", "#FFD700");
addMessage("StealthNinja", "Je suis là pour le loot !", "#4682B4");
addMessage(
  "CraftyBuilder",
  "Qui veut faire une partie de construction ?",
  "#D2691E"
);
addMessage("EpicGamerGirl", "On va écraser cette équipe !", "#FF1493");
addMessage("NoobMaster", "Comment on fait déjà ce combo ?", "#6A5ACD");
addMessage("CaféRageux", "Cette partie me rend dingue !", "#DC143C");
