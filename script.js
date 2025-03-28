const flagCodes = [
  'us', 'cn', 'jp', 'de', 'in',
  'gb', 'fr', 'it', 'br', 'ca',
  'ru', 'kr', 'mx', 'es', 'au',
  'id', 'tr', 'sa', 'nl', 'ch'
];

const orbit = document.getElementById("orbit");
const radius = 200;

flagCodes.forEach((code, index) => {
  const angle = (2 * Math.PI / flagCodes.length) * index;

  const flagEl = document.createElement("div");
  flagEl.className = "flag";

  const img = document.createElement("img");
  img.src = `https://flagcdn.com/w320/${code}.png`;  // ✅ API 경로로 수정
  img.alt = code.toUpperCase();

  flagEl.appendChild(img);

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  flagEl.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

  orbit.appendChild(flagEl);
});
