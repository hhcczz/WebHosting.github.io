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
  { code: "us", name: "미국" },
  { code: "fr", name: "프랑스" },
  { code: "de", name: "독일" },
  { code: "it", name: "이탈리아" },
  { code: "gb", name: "영국" },
  { code: "ca", name: "캐나다" },
  { code: "au", name: "호주" },
  { code: "ru", name: "러시아" },
  { code: "mx", name: "멕시코" },
  { code: "br", name: "브라질" },
  { code: "in", name: "인도" },
  { code: "cn", name: "중국" },
  { code: "es", name: "스페인" },
  { code: "sa", name: "사우디 아라비아" },
  { code: "tr", name: "터키" },
  { code: "id", name: "인도네시아" },
  { code: "za", name: "남아프리카 공화국" },
  { code: "kr", name: "대한민국" },
  { code: "ng", name: "나이지리아" },
  { code: "pk", name: "파키스탄" },
  { code: "ph", name: "필리핀" },
  { code: "ae", name: "아랍에미리트" },
  { code: "kr", name: "대한민국" },
  { code: "tw", name: "대만" },
  { code: "vn", name: "베트남" },
  { code: "my", name: "말레이시아" },
  { code: "th", name: "태국" },
  { code: "pe", name: "페루" },
  { code: "co", name: "콜롬비아" },
  { code: "cl", name: "칠레" },
  { code: "ar", name: "아르헨티나" },
  { code: "ec", name: "에콰도르" },
  { code: "bo", name: "볼리비아" },
  { code: "py", name: "파라과이" },
  { code: "uy", name: "우루과이" },
  { code: "do", name: "도미니카 공화국" },
  { code: "hn", name: "온두라스" },
  { code: "sv", name: "엘살바도르" },
  { code: "cr", name: "코스타리카" },
  { code: "ni", name: "니카라과" },
  { code: "gt", name: "과테말라" },
  { code: "jm", name: "자메이카" },
  { code: "bs", name: "바하마" },
  { code: "tt", name: "트리니다드 토바고" },
  { code: "bb", name: "바베이도스" },
  { code: "bm", name: "버뮤다" },
  { code: "tc", name: "터크스와 케이커스" },
  { code: "ky", name: "케이맨 제도" },
  { code: "gd", name: "그레나다" },
  { code: "kz", name: "카자흐스탄" },
  { code: "uz", name: "우즈베키스탄" },
  { code: "kg", name: "키르기스스탄" },
  { code: "tj", name: "타지키스탄" },
  { code: "tm", name: "투르크메니스탄" },
  { code: "am", name: "아르메니아" },
  { code: "ge", name: "조지아" },
  { code: "by", name: "벨라루스" },
  { code: "md", name: "몰도바" },
  { code: "az", name: "아제르바이잔" },
  { code: "lv", name: "라트비아" },
  { code: "lt", name: "리투아니아" },
  { code: "ee", name: "에스토니아" },
  { code: "fi", name: "핀란드" },
  { code: "se", name: "스웨덴" },
  { code: "no", name: "노르웨이" },
  { code: "dk", name: "덴마크" },
  { code: "is", name: "아이슬란드" },
  { code: "pl", name: "폴란드" },
  { code: "cz", name: "체코" },
  { code: "sk", name: "슬로바키아" },
  { code: "hu", name: "헝가리" },
  { code: "ro", name: "루마니아" },
  { code: "bg", name: "불가리아" },
  { code: "hr", name: "크로아티아" },
  { code: "si", name: "슬로베니아" },
  { code: "rs", name: "세르비아" },
  { code: "me", name: "몬테네그로" },
  { code: "ba", name: "보스니아 헤르체고비나" },
  { code: "mk", name: "북마케도니아" },
  { code: "al", name: "알바니아" },
  { code: "lu", name: "룩셈부르크" },
  { code: "be", name: "벨기에" },
  { code: "nl", name: "네덜란드" },
  { code: "ch", name: "스위스" },
  { code: "at", name: "오스트리아" },
  { code: "pt", name: "포르투갈" },
  { code: "es", name: "스페인" }
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

// 다시하기 버튼
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


// 예: 게임 종료되거나 메인화면으로 돌아갈 때
function returnToStartScreen() {
  document.body.style.overflowY = "auto";
}

let index = 0;
let countdownInterval; // startCountdown 함수 밖!

// 카운트다운
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

// 틀린답보기
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




document.getElementById("LevelSelectBtn").addEventListener("click", () => {
  // 시작 화면 숨기기
  document.getElementById("countryGameStart-Screen").style.display = "none";
  
  // 난이도 선택 화면 보이기
  document.querySelector(".level-container").style.display = "block";

  // 난이도 선택
  document.getElementById("Easy-Level").addEventListener("click", () => startGame('쉬움'));
  document.getElementById("Normal-Level").addEventListener("click", () => startGame('보통'));
  document.getElementById("Hard-Level").addEventListener("click", () => startGame('어려움'));
  
});

// 게임 시작 함수
function startGame(level) {
  // 난이도 선택 화면 숨기기
  document.querySelector(".level-container").style.display = "none"; 
  
  // 게임 화면 보이기
  document.getElementById("game-screen").style.display = "block"; 
  // 난이도에 따른 문제 수 설정
  switch (level) {
    case '쉬움':
      totalQuestions = 30;
      break;
    case '보통':
      totalQuestions = 60;
      break;
    case '어려움':
      totalQuestions = 100;
      break;
    default:
      totalQuestions = 30; // 기본값 설정 (옵션)
      break;
  }
  loadNextFlag();
}


// ✅ 오답 노트 보기
document.getElementById("incorrect-btn").addEventListener("click", showWrongAnswers);

// ✅ 반응형 사이즈 조정
window.addEventListener("resize", adjustOrbitSize); // 반응형 유지

// ✅ 이제 addEventListener 실행
document.getElementById("incorrect-btn").addEventListener("click", showWrongAnswers);
window.addEventListener("load", adjustOrbitSize);
window.addEventListener("resize", adjustOrbitSize); // 반응형 유지
