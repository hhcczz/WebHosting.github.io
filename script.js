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
  img.src = `cache/${code}.png`;
  img.alt = code.toUpperCase();

  flagEl.appendChild(img);

  // ✅ 중심 기준 + 회전 반지름 위치 적용
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  flagEl.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

  orbit.appendChild(flagEl);
});

const countries = [
  { code: "kr", name: "대한민국" },
  { code: "jp", name: "일본" },
  { code: "us", name: "미국" },
  { code: "fr", name: "프랑스" },
  { code: "de", name: "독일" },
  { code: "it", name: "이탈리아" }
];

let currentCode = null;
let currentIndex = 0;
let randomIndex = 0;
let usedCountryCodes = [];
let totalQuestions = Object.keys(countries).length;
let answeredQuestions = 0; // 답한 문제 수

let correctCount = 0;
let wrongCount = 0;

// 문제를 로드하는 함수
function loadNextFlag() {
  if (usedCountryCodes.length === totalQuestions) {
    // 게임 종료 처리
    document.getElementById("flag-image").src = `https://flagcdn.com/w320/kr.png`;
    document.getElementById("question").textContent = "🎉 모든 문제를 풀었습니다!";
    document.getElementById("answer-input").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("end-buttons").style.display = "block";
    return;
  }

  // 중복된 국가가 나오면 다시 뽑기
  while (true) {
    randomIndex = Math.floor(Math.random() * countries.length);
    currentCode = countries[randomIndex].code;

    if (!usedCountryCodes.includes(currentCode)) {
      break;
    }
  }
  
  // 중복이 아니면 저장
  usedCountryCodes.push(currentCode);

  // 선택된 국가 정보 저장
  currentIndex = randomIndex;

  console.log(countries[randomIndex].code); // "kr"
  console.log(countries[randomIndex].name); // "대한민국"

  const flagUrl = `https://flagcdn.com/w320/${currentCode}.png`;
  document.getElementById("flag-image").src = flagUrl;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("answer-input").disabled = false;

  // 확실한 포커싱 (엔터 연타 대비)
  setTimeout(() => {
    document.getElementById("answer-input").focus();
  }, 50);
}

// 정답 체크하는 함수
function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.trim();
  const correctAnswer = countries[currentIndex].name;
  const feedback = document.getElementById("feedback");

  document.getElementById("submit-btn").disabled = true;
  document.getElementById("answer-input").disabled = true;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ 정답입니다!";
    feedback.style.color = "green";
    correctCount++;
  } else {
    feedback.textContent = `❌ 정답은 ${correctAnswer}`;
    feedback.style.color = "red";
    wrongCount++;
  }

  // 점수 업데이트
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("wrong-count").textContent = wrongCount;

  answeredQuestions++; // 정답 제출 문제 수 증가

  setTimeout(loadNextFlag, 1500); // 문제를 맞추면 자동으로 다음 문제로 넘어감
}

// 버튼 클릭 이벤트
document.getElementById("submit-btn").addEventListener("click", () => {
  // ✅ 입력창 너비 초기화
  input.style.width = initialWidth;

  // 나머지 정답 확인 로직 (정답 체크, 점수 증가 등)
});

// 엔터 키로 제출
document.getElementById("answer-input").addEventListener("keydown", (e) => {
  const isButtonEnabled = !document.getElementById("submit-btn").disabled;
  if (e.key === "Enter" && isButtonEnabled) {
    checkAnswer();
  }
});

const input = document.getElementById("answer-input");
const initialWidth = "240px"; // 너비 초기값 (CSS에서 설정한 값과 동일하게!)

input.addEventListener("input", () => {
  const len = input.value.length;
  const newWidth = Math.min(240 + len * 10, 320); // 원하는 최대치까지
  input.style.width = `${newWidth}px`;
});

document.getElementById("retry-btn").addEventListener("click", () => {
  // 1. 점수 초기화
  correctCount = 0;
  wrongCount = 0;
  document.getElementById("correct-count").textContent = 0;
  document.getElementById("wrong-count").textContent = 0;

  // 2. 게임 상태 초기화
  usedCountryCodes = [];
  answeredQuestions = 0;

  // 3. 화면 리셋
  document.getElementById("end-buttons").style.display = "none";  // 종료버튼 숨김
  document.getElementById("answer-input").value = "";
  document.getElementById("question").textContent = "이 국기는 어느 나라일까요?";
  document.getElementById("answer-input").style.display = "inline-block";
  document.getElementById("submit-btn").style.display = "inline-block";
  document.getElementById("feedback").style.display = "block";
  document.getElementById("feedback").textContent = "";

  // 4. 다음 문제 로딩
  loadNextFlag();
});

window.addEventListener("DOMContentLoaded", () => {
  // "게임 시작하기" 버튼 클릭 시
  document.getElementById("start-btn").addEventListener("click", () => {
    // 시작 화면 숨기고 게임 화면 보이기
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("end-buttons").style.display = "none";

    // 첫 문제 로딩
    loadNextFlag(); // ← 여기에만 호출되게!
    document.getElementById("answer-input").focus();
  });
});
