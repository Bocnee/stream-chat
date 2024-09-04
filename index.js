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
