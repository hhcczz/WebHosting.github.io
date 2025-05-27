const flagCodes = [
    'us', 'cn', 'jp', 'de', 'in',
    'gb', 'fr', 'it', 'br', 'ca',
    'ru', 'kr', 'mx', 'es', 'au',
    'id', 'tr', 'sa', 'nl', 'ch'
  ];

export function adjustOrbitSize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const radius = Math.min(windowWidth, windowHeight) * 0.3;

  orbit.innerHTML = "";

  const orbitWidth = orbit.offsetWidth;
  const orbitHeight = orbit.offsetHeight;
  const centerX = orbitWidth / 2;
  const centerY = orbitHeight / 2;

  flagCodes.forEach((code, index) => {
    const angle = (2 * Math.PI / flagCodes.length) * index;

    const flagEl = document.createElement("div");
    flagEl.className = "flag";

    const img = document.createElement("img");
    img.src = `https://flagcdn.com/w320/${code}.png`;
    img.alt = code.toUpperCase();
    img.style.objectFit = "cover";

    const flagSize = Math.min(50, radius / 5);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    flagEl.style.position = "absolute";
    flagEl.style.left = `${x}px`;
    flagEl.style.top = `${y}px`;
    flagEl.style.width = `${flagSize}px`;
    flagEl.style.height = `${flagSize}px`;
    flagEl.style.borderRadius = `50%`;
    flagEl.style.overflow = "hidden";

    img.style.width = "100%";
    img.style.height = "100%";

    flagEl.appendChild(img);
    orbit.appendChild(flagEl);
  });
}
