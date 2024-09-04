function generateLink() {
  const twitchChannel = document
    .getElementById("twitchChannelInput")
    .value.trim();
  if (twitchChannel) {
    const link = `${
      window.location.origin
    }/overlay.html?channel=${encodeURIComponent(twitchChannel)}`;
    const generatedLinkElement = document.getElementById("generatedLink");

    // Update the inner HTML of the generatedLink div
    generatedLinkElement.innerHTML = `
      <p>Ton lien :</p>
      <p class="link">
        <a href="${link}" target="_blank">${link}</a>
        <button id="copyButton" class="oval button button--copy">Copier le lien</button>
      </p>
      <div id="notification" class="oval hidden">Lien copié !</div>
    `;

    // Show the generatedLink element
    generatedLinkElement.classList.add("show");

    // Ensure we only add one event listener
    const copyButton = document.getElementById("copyButton");
    const notification = document.getElementById("notification");

    // Remove any existing event listeners to avoid multiple bindings
    copyButton.removeEventListener("click", handleCopyClick);

    // Define the event handler
    function handleCopyClick() {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          // Show notification
          notification.classList.remove("hidden");
          notification.classList.add("show");
          setTimeout(() => {
            notification.classList.remove("show");
            notification.classList.add("hidden");
          }, 2000); // Hide after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }

    // Add event listener to the button
    copyButton.addEventListener("click", handleCopyClick);
  }
}
