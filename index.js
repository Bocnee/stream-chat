function generateLink() {
  const twitchChannel = document
    .getElementById("twitchChannelInput")
    .value.trim();
  if (twitchChannel) {
    const link = `${
      window.location.origin
    }/overlay.html?channel=${encodeURIComponent(twitchChannel)}`;
    const generatedLinkElement = document.getElementById("generatedLink");
    generatedLinkElement.textContent = `Generated Link: ${link}`;
    generatedLinkElement.innerHTML = `Generated Link: <a href="${link}" target="_blank">${link}</a>`;
  }
}

// Test messages
/* addMessage("ZeldaFan92", "Trop hâte de voir le prochain boss !", "#8A2BE2");
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
addMessage("CaféRageux", "Cette partie me rend dingue !", "#DC143C"); */
