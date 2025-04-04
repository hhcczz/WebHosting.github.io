const flagCodes = [
  'us', 'cn', 'jp', 'de', 'in',
  'gb', 'fr', 'it', 'br', 'ca',
  'ru', 'kr', 'mx', 'es', 'au',
  'id', 'tr', 'sa', 'nl', 'ch'
];

const orbit = document.getElementById("orbit");

// 반응형으로 크기와 반지름을 조정하기 위한 함수
const adjustOrbitSize = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const radius = Math.min(windowWidth, windowHeight) * 0.3; // 반지름

  // 기존 orbit 내용 초기화
  orbit.innerHTML = "";

  // orbit 요소의 중심 계산
  const orbitWidth = orbit.offsetWidth;
  const orbitHeight = orbit.offsetHeight;
  const centerX = orbitWidth / 2;
  const centerY = orbitHeight / 2;

  // 회전 국기 배치
  flagCodes.forEach((code, index) => {
    const angle = (2 * Math.PI / flagCodes.length) * index;

    const flagEl = document.createElement("div");
    flagEl.className = "flag";

    const img = document.createElement("img");
    img.src = `https://flagcdn.com/w320/${code}.png`;
    img.alt = code.toUpperCase();
    img.style.objectFit = "cover";

    flagEl.appendChild(img);

    const flagSize = Math.min(50, radius / 5);

    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    flagEl.style.left = `${x}px`;
    flagEl.style.top = `${y}px`;
    flagEl.style.width = `${flagSize}px`;
    flagEl.style.height = `${flagSize}px`;

    img.style.width = "100%";
    img.style.height = "100%";

    flagEl.style.borderRadius = "50%";
    flagEl.style.overflow = "hidden";

    orbit.appendChild(flagEl);
  });
};

const countries = [
  { code: "kr", name: "대한민국" },
  { code: "jp", name: "일본" },
  //{ code: "us", name: "미국" },
  //{ code: "fr", name: "프랑스" },
  //{ code: "de", name: "독일" },
  //{ code: "it", name: "이탈리아" }
];

let currentCode = null;
let currentIndex = 0;
let randomIndex = 0;
let usedCountryCodes = [];
const wrongAnswers = []; // 틀릴 때마다 여기에 저장
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
    document.getElementById("countdown-bar").style.display = "none";
    document.getElementById("end-buttons").style.display = "block";
    returnToStartScreen()


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
  startCountdown(); // 호출해서 시작!
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

// 정답 체크 함수
function checkAnswer(isTimeout = false) {
  clearInterval(countdownInterval); // 정답 제출하면 카운트 멈춤
  const userInput = document.getElementById("answer-input");
  const userAnswer = userInput.value.trim();
  const correctAnswer = countries[currentIndex].name;
  const feedback = document.getElementById("feedback");

  document.getElementById("submit-btn").disabled = true;
  userInput.disabled = true;

  if (!isTimeout && userAnswer === correctAnswer) {
    // 정답일 경우
    feedback.textContent = "✅ 정답입니다!";
    feedback.style.color = "green";
    correctCount++;
  } else {
    // ❌ 오답 저장
    if (!isTimeout) {
      wrongAnswers.push({
        flag: countries[currentIndex].code,
        answer: countries[currentIndex].name,
        user: userAnswer
      });
    } else {
      wrongAnswers.push({
        flag: countries[currentIndex].code,
        answer: countries[currentIndex].name,
        user: "(미응답)"
      });
    }
  
    // 피드백
    feedback.textContent = isTimeout
      ? `⏱️ 시간 초과! 정답은 ${correctAnswer}`
      : `❌ 정답은 ${correctAnswer}`;
    feedback.style.color = "red";
    wrongCount++;
  }

  // 점수 업데이트
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("wrong-count").textContent = wrongCount;

  answeredQuestions++;

  setTimeout(loadNextFlag, 1500);
}

const submitBtn = document.getElementById("submit-btn");
const inputBox = document.getElementById("answer-input");

// ✅ Enter 키로 제출
inputBox.addEventListener("keydown", (e) => {
  const isButtonEnabled = !submitBtn.disabled;
  if (e.key === "Enter" && isButtonEnabled) {
    checkAnswer();
  }
});

// ✅ 마우스 클릭 or 스마트폰 터치
submitBtn.addEventListener("click", () => {
  if (!submitBtn.disabled) {
    checkAnswer();
  }
});


document.getElementById("retry-btn").addEventListener("click", () => {
  // 점수, 상태 초기화
  correctCount = 0;
  wrongCount = 0;
  answeredQuestions = 0;
  currentCode = null;
  usedCountryCodes = [];
  wrongAnswers.length = 0;

  // 화면 초기화
  document.getElementById("correct-count").textContent = 0;
  document.getElementById("wrong-count").textContent = 0;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";

  document.getElementById("answer-input").style.display = "inline-block";
  document.getElementById("submit-btn").style.display = "inline-block";
  document.getElementById("feedback").style.display = "block";
  document.getElementById("end-buttons").style.display = "none";
  document.getElementById("countdown-bar").style.display = "block";
  document.getElementById("wrong-questions").style.display = "none";

  // 카운트 블럭 초기화
  document.querySelectorAll('.count-block').forEach(block => {
    block.style.backgroundColor = '#90ee90'; // 초기 연두색
  });
  // 다음 문제 로딩
  loadNextFlag();
});

window.addEventListener("DOMContentLoaded", () => {
  // "게임 시작하기" 버튼 클릭 시
  document.getElementById("start-btn").addEventListener("click", () => {
    // 시작 화면 숨기고 게임 화면 보이기
    document.getElementById("countryGameStart-Screen").style.display = "none";
    document.getElementById("start-title").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("end-buttons").style.display = "none";
    document.body.style.overflowY = "hidden";

    // 첫 문제 로딩
    loadNextFlag(); // ← 여기에만 호출되게!
    document.getElementById("answer-input").focus();
  });
});

// 예: 게임 종료되거나 메인화면으로 돌아갈 때
function returnToStartScreen() {
  document.body.style.overflowY = "auto";
}

let index = 0;
let countdownInterval; // startCountdown 함수 밖!

function startCountdown() {
  index = 0;
  clearInterval(countdownInterval);

  const blocks = document.querySelectorAll('.count-block');

  // 초기화
  blocks.forEach(block => {
    block.style.backgroundColor = '#90ee90';
  });

  countdownInterval = setInterval(() => {
    if (index < blocks.length) {
      blocks[index].style.backgroundColor = '#ffffff';
      index++;
    } else {
      clearInterval(countdownInterval);

      // 5초 지나도 아직 제출 안 했으면 자동 오답 처리
      const isDisabled = document.getElementById("submit-btn").disabled;
      if (!isDisabled) {
        checkAnswer(true); // 시간 초과 오답 처리
      }
    }
  }, 1000);
}

function showWrongAnswers() {
  const container = document.getElementById("wrong-questions");

  if (container.style.display === "block") {
    container.style.display = "none";
    return;
  }

  container.innerHTML = "";
  document.body.style.overflowY = "auto";

  if (wrongAnswers.length === 0) {
    container.innerHTML = "<p>틀린 문제가 없습니다!</p>";
  } else {
    wrongAnswers.forEach((item, idx) => {
      container.innerHTML += `
        <div class="wrong-item">
          <img src="https://flagcdn.com/w80/${item.flag}.png" alt="flag" />
          <div class="wrong-text">
            <strong>${idx + 1}. 정답:</strong> ${item.answer} |
            <strong>내 답:</strong> ${item.user}
          </div>
        </div>
      `;
    });
  }

  container.style.display = "block";

  // ✅ 자동 스크롤 이동
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ✅ 이제 addEventListener 실행
document.getElementById("incorrect-btn").addEventListener("click", showWrongAnswers);
window.addEventListener("load", adjustOrbitSize);
window.addEventListener("resize", adjustOrbitSize); // 반응형 유지
