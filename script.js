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
  { code: "us", name: "미국" },
  { code: "cn", name: "중국" },
  { code: "jp", name: "일본" },
  { code: "de", name: "독일" },
  { code: "in", name: "인도" },
  { code: "gb", name: "영국" },
  { code: "fr", name: "프랑스" },
  { code: "it", name: "이탈리아" },
  { code: "ca", name: "캐나다" },
  { code: "ru", name: "러시아" },
  { code: "br", name: "브라질" },
  { code: "kr", name: "대한민국" },
  { code: "au", name: "호주" },
  { code: "mx", name: "멕시코" },
  { code: "es", name: "스페인" },
  { code: "nl", name: "네덜란드" },
  { code: "ch", name: "스위스" },
  { code: "sa", name: "사우디 아라비아" },
  { code: "tr", name: "터키" },
  { code: "id", name: "인도네시아" },
  { code: "pl", name: "폴란드" },
  { code: "be", name: "벨기에" },
  { code: "se", name: "스웨덴" },
  { code: "th", name: "태국" },
  { code: "ng", name: "나이지리아" },
  { code: "ph", name: "필리핀" },
  { code: "ie", name: "아일랜드" },
  { code: "no", name: "노르웨이" },
  { code: "sg", name: "싱가포르" },
  { code: "dk", name: "덴마크" },
  { code: "my", name: "말레이시아" },
  { code: "eg", name: "이집트" },
  { code: "vn", name: "베트남" },
  { code: "hk", name: "홍콩" },
  { code: "cz", name: "체코" },
  { code: "pt", name: "포르투갈" },
  { code: "nz", name: "뉴질랜드" },
  { code: "gr", name: "그리스" },
  { code: "fi", name: "핀란드" },
  { code: "ro", name: "루마니아" },
  { code: "ua", name: "우크라이나" },
  { code: "cl", name: "칠레" },
  { code: "bd", name: "방글라데시" },
  { code: "pk", name: "파키스탄" },
  { code: "ar", name: "아르헨티나" },
  { code: "ke", name: "케냐" },
  { code: "co", name: "콜롬비아" },
  { code: "ae", name: "아랍에미리트" },
  { code: "ma", name: "모로코" },
  { code: "np", name: "네팔" },
  { code: "ec", name: "에콰도르" },
  { code: "pe", name: "페루" },
  { code: "ve", name: "베네수엘라" },
  { code: "cu", name: "쿠바" },
  { code: "py", name: "파라과이" },
  { code: "uy", name: "우루과이" },
  { code: "bo", name: "볼리비아" },
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
  { code: "af", name: "아프가니스탄"},
  { code: "al", name: "알바니아"},
  { code: "dz", name: "알제리"},
  { code: "as", name: "아메리칸사모아"},
  { code: "ad", name: "안도라"},
  { code: "ao", name: "앙골라"},
  { code: "ai", name: "앙길라"},
  { code: "ag", name: "앤티가 바부다"},
  { code: "am", name: "아르메니아"},
  { code: "aw", name: "아루바"},
  { code: "at", name: "오스트리아"},
  { code: "az", name: "아제르바이잔"},
  { code: "bh", name: "바레인"},
  { code: "by", name: "벨라루스"},
  { code: "bz", name: "벨리즈"},
  { code: "bj", name: "베냉"},
  { code: "bt", name: "부탄"},
  { code: "ba", name: "보스니아 헤르체고비나"},
  { code: "bw", name: "보츠와나"},
  { code: "bn", name: "브루나이"},
  { code: "bg", name: "불가리아"},
  { code: "bf", name: "부르키나파소"},
  { code: "bi", name: "부룬디"},
  { code: "kh", name: "캄보디아"},
  { code: "cm", name: "카메룬"},
  { code: "cv", name: "카보베르데"},
  { code: "cf", name: "중앙아프리카 공화국"},
  { code: "td", name: "차드"},
  { code: "km", name: "코모로"},
  { code: "cg", name: "콩고"},
  { code: "cd", name: "콩고 민주 공화국"},
  { code: "hr", name: "크로아티아"},
  { code: "cy", name: "키프로스"},
  { code: "dj", name: "지부티"},
  { code: "dm", name: "도미니카 연방"},
  { code: "gq", name: "적도 기니"},
  { code: "er", name: "에리트레아"},
  { code: "ee", name: "에스토니아"},
  { code: "et", name: "에티오피아"},
  { code: "fj", name: "피지"},
  { code: "ga", name: "가봉"},
  { code: "gm", name: "감비아"},
  { code: "ge", name: "조지아"},
  { code: "gh", name: "가나"},
  { code: "gn", name: "기니"},
  { code: "gw", name: "기니비사우"},
  { code: "gy", name: "가이아나"},
  { code: "ht", name: "아이티"},
  { code: "hu", name: "헝가리"},
  { code: "is", name: "아이슬란드"},
  { code: "ir", name: "이란"},
  { code: "iq", name: "이라크"},
  { code: "ax", name: "올란드 제도" },
  { code: "aq", name: "남극" },
  { code: "bv", name: "부베섬" },
  { code: "cc", name: "코코스(킬링) 제도" },
  { code: "ck", name: "쿡 제도" },
  { code: "cx", name: "크리스마스섬" },
  { code: "eh", name: "서사하라" },
  { code: "fk", name: "포클랜드 제도(말비나스)" },
  { code: "fo", name: "페로 제도" },
  { code: "gf", name: "프랑스령 기아나" },
  { code: "gg", name: "건지" },
  { code: "gi", name: "지브롤터" },
  { code: "gl", name: "그린란드" },
  { code: "gp", name: "과들루프" },
  { code: "gs", name: "사우스조지아 사우스샌드위치 제도" },
  { code: "gu", name: "괌" },
  { code: "hm", name: "허드 맥도널드 제도" },
  { code: "im", name: "맨섬" },
  { code: "io", name: "영국령 인도양 지역" },
  { code: "je", name: "저지" },
  { code: "ki", name: "키리바시" },
  { code: "kn", name: "세인트키츠 네비스" },
  { code: "lc", name: "세인트루시아" },
  { code: "mf", name: "생마르탱(프랑스령)" },
  { code: "mh", name: "마셜 제도" },
  { code: "mp", name: "북마리아나 제도" },
  { code: "mq", name: "마르티니크" },
  { code: "ms", name: "몬트세랫" },
  { code: "nc", name: "뉴칼레도니아" },
  { code: "nf", name: "노퍽섬" },
  { code: "nu", name: "니우에" },
  { code: "om", name: "오만" },
  { code: "pa", name: "파나마" },
  { code: "pf", name: "프랑스령 폴리네시아" },
  { code: "pg", name: "파푸아뉴기니" },
  { code: "pm", name: "생피에르 미클롱" },
  { code: "pn", name: "핏케언 제도" },
  { code: "pr", name: "푸에르토리코" },
  { code: "ps", name: "팔레스타인" },
  { code: "pw", name: "팔라우" },
  { code: "qa", name: "카타르" },
  { code: "re", name: "레위니옹" },
  { code: "rw", name: "르완다" },
  { code: "sb", name: "솔로몬 제도" },
  { code: "sc", name: "세이셸" },
  { code: "sd", name: "수단" },
  { code: "sh", name: "세인트헬레나" },
  { code: "sj", name: "스발바르 얀마옌" },
  { code: "sk", name: "슬로바키아" },
  { code: "sl", name: "시에라리온" },
  { code: "sm", name: "산마리노" },
  { code: "sn", name: "세네갈" },
  { code: "so", name: "소말리아" },
  { code: "sr", name: "수리남" },
  { code: "ss", name: "남수단" },
  { code: "st", name: "상투메 프린시페" },
  { code: "sx", name: "신트마르턴(네덜란드령)" },
  { code: "sy", name: "시리아" },
  { code: "sz", name: "에스와티니" },
  { code: "tf", name: "프랑스령 남부와 남극 지역" },
  { code: "tg", name: "토고" },
  { code: "tj", name: "타지키스탄" },
  { code: "tk", name: "토켈라우" },
  { code: "tl", name: "동티모르" },
  { code: "tm", name: "투르크메니스탄" },
  { code: "tn", name: "튀니지" },
  { code: "to", name: "통가" },
  { code: "tv", name: "투발루" },
  { code: "tz", name: "탄자니아" },
  { code: "ug", name: "우간다" },
  { code: "um", name: "미국령 군소 제도" },
  { code: "uz", name: "우즈베키스탄" },
  { code: "va", name: "바티칸 시국" },
  { code: "vc", name: "세인트빈센트 그레나딘" },
  { code: "vg", name: "영국령 버진아일랜드" },
  { code: "vi", name: "미국령 버진아일랜드" },
  { code: "vu", name: "바누아투" },
  { code: "wf", name: "월리스 푸투나" },
  { code: "ws", name: "사모아" },
  { code: "ye", name: "예멘" },
  { code: "yt", name: "마요트" },
  { code: "zm", name: "잠비아" },
  { code: "zw", name: "짐바브웨" },
  { code: "bl", name: "생바르텔레미" },
  { code: "bq", name: "보네르섬" },
  { code: "cw", name: "퀴라소" }
];

// 사이트 접속 테스트
async function testCountrySites(countries) {
  console.log("실행됨 ㅋ");
    const seenCodes = new Set(); // 중복 검사용 Set
    
    countries.forEach((country, index) => {
        // 중복 검사
        if (seenCodes.has(country.code)) {
            console.log(`⚠️ 중복된 국가 코드: ${country.name} (${country.code}) - ${index + 1}번째`);
            return;
        }
        
        seenCodes.add(country.code); // 중복 방지
        
        // 접속 테스트
        const url = `https://flagcdn.com/w320/${country.code}.png`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log(`❌ 접속 실패: ${country.name} (${url}) - 상태코드: ${response.status}`);
                }
            })
            .catch(error => {
                console.log(`❌ 접속 실패: ${country.name} (${url}) - 에러: ${error.message}`);
            });
    });
}

// 테스트 실행
// testCountrySites(countries);

let currentCode = null;
let currentIndex = 0;
let randomIndex = 0;
let usedCountryCodes = [];
const wrongAnswers = []; // 틀릴 때마다 여기에 저장
let totalQuestions = Object.keys(countries).length;
let answeredQuestions = 0; // 답한 문제 수
let ThisPlayingGameLevel = "쉬움";
let CurrentNum = 0;

let correctCount = 0;
let wrongCount = 0;

let index = 0;
let countdownInterval; // startCountdown 함수 밖!

let EasyCorrectValue = 'kr';
let EasyCorrectValueList = ['kr', 'jp'];

// Easy 난이도 게임 플레이
function EasyGame(correctName) {
  let options = [];
  let _SuccessCount = 0;
  
  // 정답을 포함하여 총 3개의 버튼을 채울 리스트 생성
  while (true) {
    let _EasyRandom = Math.floor(Math.random() * countries.length);
    let randomName = countries[_EasyRandom].name;

    // 정답은 이미 선택된 상태이므로 중복 체크
    if (randomName !== correctName && !options.includes(randomName)) {
      options.push(randomName);
      _SuccessCount++;
    }

    if (_SuccessCount === 2) break;
  }

  // 정답 추가
  options.push(correctName);

  // 버튼 배열을 무작위로 섞기
  options.sort(() => Math.random() - 0.5);

  return options;
}

// 게임 종료 처리
function GameOver(){
  ResetLevelUI(ThisPlayingGameLevel)
  document.getElementById("flag-image").src = `https://flagcdn.com/w320/kr.png`;
  document.getElementById("question").textContent = "🎉 모든 문제를 풀었습니다!";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("countdown-bar").style.display = "none";
  document.getElementById("end-buttons").style.display = "block";
}

// 문제를 로드하는 함수
function loadNextFlag() {
  if (usedCountryCodes.length >= totalQuestions) {
    GameOver();
    return;
  }

  // 중복된 국가가 나오면 다시 뽑기
  while (true) {
    randomIndex = Math.floor(Math.random() * 208);
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

  const correctName = countries[randomIndex].name;

  if (ThisPlayingGameLevel === "쉬움"){
    // 버튼 요소 가져오기
    const btn1 = document.getElementById("EasyCorrectBtn1");
    const btn2 = document.getElementById("EasyCorrectBtn2");
    const btn3 = document.getElementById("EasyCorrectBtn3");

    const options = EasyGame(correctName);
    const allButtons = [btn1, btn2, btn3];
    const classesToRemove = ["disabled-btn", "wrong-btn", "correct-btn"];

    allButtons.forEach(button => {
      classesToRemove.forEach(className => button.classList.remove(className));
      button.disabled = false;
    });

    // 버튼에 무작위 답안 배치
    btn1.textContent = options[0];
    btn2.textContent = options[1];
    btn3.textContent = options[2];

    // 버튼 클릭 이벤트 설정
    allButtons.forEach((button, index) => {
      button.onclick = () => {
        if (button.disabled) return;  // 중복 클릭 방지
        EasyCorrectValue = options[index];
        // 모든 버튼 비활성화 (CSS와 JS 모두)
        allButtons.forEach(btn => {
          btn.disabled = true;
          if(btn != button) {
            btn.classList.add("disabled-btn"); // ✅ 모든 버튼 비활성화
          }
        });
        checkAnswer(false, button);
      };
    });
  }

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

let userInput = "";
let userAnswer = "";

// 정답 체크 함수
function checkAnswer(isTimeout = false, clickedButton = null) {
  clearInterval(countdownInterval); // 정답 제출하면 카운트 멈춤
  if(ThisPlayingGameLevel === "쉬움"){
    userAnswer = EasyCorrectValue;
  }
  else if(ThisPlayingGameLevel === "어려움") {
    userInput = document.getElementById("answer-input");
    userAnswer = userInput.value.trim();
    document.getElementById("submit-btn").disabled = true;
    userInput.disabled = true;
  }
  const correctAnswer = countries[currentIndex].name;
  const feedback = document.getElementById("feedback");

  // 정답 여부 판단
  if (!isTimeout && userAnswer === correctAnswer) {
    if(ThisPlayingGameLevel === "쉬움") clickedButton.classList.add("correct-btn");
    feedback.textContent = "✅ 정답입니다!";
    feedback.style.color = "green";
    correctCount++;
  } 
  else {
    // ❌ 오답 저장
    if (!isTimeout) {
      wrongAnswers.push({
        flag: countries[currentIndex].code,
        answer: countries[currentIndex].name,
        user: userAnswer
      });
      if(ThisPlayingGameLevel === "쉬움") clickedButton.classList.add("wrong-btn");
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

  // 다음 문제로 넘어가기
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

// 레벨에 따른 UI 초기화
function ResetLevelUI(level){
  if(usedCountryCodes.length >= totalQuestions){
    document.getElementById("GameClass_Hard").style.display ="none";
    document.getElementById("GameClass_Easy").style.display ="none";
  }
  else if(level === "쉬움"){
    document.getElementById("GameClass_Hard").style.display ="none";
    document.getElementById("GameClass_Easy").style.display ="block";
  }
  else if(level === "어려움"){
    document.getElementById("GameClass_Easy").style.display ="none";
    document.getElementById("GameClass_Hard").style.display ="block";
    document.getElementById("answer-input").value = "";
  }
}
// 게임 다시하기
function ReStartGame(){
  // 점수, 상태 초기화
  correctCount = 0;
  wrongCount = 0;
  answeredQuestions = 0;
  currentCode = null;
  usedCountryCodes = [];
  wrongAnswers.length = 0;

  // 화면 초기화
  ResetLevelUI(ThisPlayingGameLevel)

  document.getElementById("correct-count").textContent = 0;
  document.getElementById("wrong-count").textContent = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("question").textContent = "이 국기는 어느 나라일까요?";
  
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
}

// 다시하기 버튼
document.getElementById("retry-btn").addEventListener("click", () => {
  ReStartGame();
});

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

      let isDisabled = false;
      // 5초 지나도 아직 제출 안 했으면 자동 오답 처리
      if (ThisPlayingGameLevel === "어려움") {
        isDisabled = document.getElementById("submit-btn").disabled;
      }
      if (!isDisabled) {
        if(ThisPlayingGameLevel === "쉬움"){
          document.getElementById("EasyCorrectBtn1").classList.add("disabled-btn");
          document.getElementById("EasyCorrectBtn2").classList.add("disabled-btn");
          document.getElementById("EasyCorrectBtn3").classList.add("disabled-btn");
        }
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

// 레벨 선택할 때 난이도 받기
function GetGameCurrentLevel(Level){
  ThisPlayingGameLevel = Level;
}

// 레벨 선택할 때 레벨 받기
function GetGameCurrentNum(Num){
  CurrentNum = Num;
}

document.getElementById("LevelSelectBtn").addEventListener("click", () => {
  // 시작 화면 숨기기
  document.getElementById("countryGameStart-Screen").style.display = "none";
  
  // 난이도 선택 화면 보이기
  document.querySelector(".level-container").style.display = "block";

  // 난이도 선택
  document.getElementById("Easy-Level").addEventListener("click", () => GetGameCurrentLevel('쉬움'));
  document.getElementById("Normal-Level").addEventListener("click", () => GetGameCurrentLevel('보통'));
  document.getElementById("Hard-Level").addEventListener("click", () => GetGameCurrentLevel('어려움'));;
  
  document.getElementById("Question_Num-10").addEventListener("click", () => GetGameCurrentNum(10));
  document.getElementById("Question_Num-20").addEventListener("click", () => GetGameCurrentNum(20));
  document.getElementById("Question_Num-30").addEventListener("click", () => GetGameCurrentNum(30));
  document.getElementById("Question_Num-50").addEventListener("click", () => GetGameCurrentNum(50));
  document.getElementById("Question_Num-70").addEventListener("click", () => GetGameCurrentNum(70));
  document.getElementById("Question_Num-100").addEventListener("click", () => GetGameCurrentNum(100));
  
  document.getElementById("GameStartBtn").addEventListener("click", () => startGame());
});

// 게임 시작 함수
function startGame() {
  // 난이도 선택 화면 숨기기
  document.querySelector(".level-container").style.display = "none"; 
  
  // 게임 화면 보이기
  document.getElementById("game-screen").style.display = "block"; 

  totalQuestions = CurrentNum;
  if(totalQuestions == 0) totalQuestions = 10;
  ResetLevelUI(ThisPlayingGameLevel)
  ReStartGame();
}

// 홈 버튼
document.getElementById("home-btn").addEventListener("click", () => {
  window.location.reload();
});

// ✅ 오답 노트 보기
document.getElementById("incorrect-btn").addEventListener("click", showWrongAnswers);
window.addEventListener("load", adjustOrbitSize);
window.addEventListener("resize", adjustOrbitSize); // 반응형 유지
