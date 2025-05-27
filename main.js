import { adjustOrbitSize } from './JS/orbit.js';
import { countries } from './JS/countries.js';
import { loadHtmlIntoContainer } from './JS/HtmlLoadManager.js';
import { testCountrySites } from './JS/Testing.js';
import { StartGame } from './JS/GamePlay.js';
import { checkAnswer } from './JS/GamePlay.js';
import GameData from './JS/GameDataManager.js';

window.addEventListener("DOMContentLoaded", () => {
  // orbit.html 삽입 후 처리
  loadHtmlIntoContainer("./HTML/orbit.html", "orbit-container", () => {
    console.log("✅ orbit.html 삽입 완료");
    globalThis.levelBtn = document.getElementById("LevelSelectBtn");
    adjustOrbitSize(); // orbit 관련 이벤트 등록 등
    setupLevelSelectBtnEvent();
  });

  // LevelSelectPages.html 삽입 후 처리
  loadHtmlIntoContainer("./HTML/LevelSelectPages.html", "level-container", () => {
    console.log("✅ LevelSelectPages.html 삽입 완료");
  });

  loadHtmlIntoContainer("./HTML/InGame.html", "game-screen", () => {
    console.log("✅ InGame.html 삽입 완료");
    setupGameStartBtn();
  });
});

// 사이트 접속 테스트
testCountrySites(countries);

function setupGameStartBtn(){
  if (!levelBtn) {
    console.warn("❗ submit-btn 버튼이 아직 DOM에 없음");
    return;
  }
  // ✅ Enter 키로 제출
  // 모든 정답 버튼을 클래스 기반으로 선택
  const submitButtons = document.querySelectorAll(".submit-btn");

  // 클릭 이벤트 통합
  submitButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (!button.disabled) {
        checkAnswer();
      }
    });
  });

  // 키보드 Enter 이벤트 통합
  document.querySelectorAll(".AnswerInputStyle").forEach(input => {
    input.addEventListener("keydown", (e) => {
      const submitBtn = input.closest(".input-wrapper").querySelector(".submit-btn");
      if (e.key === "Enter" && submitBtn && !submitBtn.disabled) {
        checkAnswer();
      }
    });
  });

  // 다시하기 버튼
  document.getElementById("retry-btn").addEventListener("click", () => {
    StartGame();
  });
  // 홈 버튼 클릭 이벤트
  document.getElementById("home-btn").addEventListener("click", () => {
    window.location.reload();
  });
  // 오답 노트 클릭 이벤트
  document.getElementById("incorrect-btn").addEventListener("click", showWrongAnswers);
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

  if (GameData.wrongAnswers.length === 0) {
    container.innerHTML = "<p>틀린 문제가 없습니다!</p>";
  } else {
    GameData.wrongAnswers.forEach((item, idx) => {
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
  GameData.ThisPlayingGameLevel = Level;
}

// 레벨 선택할 때 레벨 받기
function GetGameCurrentNum(Num){
  GameData.CurrentNum = Num;
}

// 레벨 선택 버튼 클릭 이벤트
function setupLevelSelectBtnEvent() {
  if (!levelBtn) {
    console.warn("❗ LevelSelectBtn 버튼이 아직 DOM에 없음");
    return;
  }

  levelBtn.addEventListener("click", () => {
    document.getElementById("countryGameStart-Screen").style.display = "none";
    document.getElementById("level-container").style.display = "block";

    document.getElementById("Easy-Level").addEventListener("click", () => GetGameCurrentLevel('쉬움'));
    document.getElementById("Normal-Level").addEventListener("click", () => GetGameCurrentLevel('보통'));
    document.getElementById("Hard-Level").addEventListener("click", () => GetGameCurrentLevel('어려움'));

    document.getElementById("Question_Num-10").addEventListener("click", () => GetGameCurrentNum(10));
    document.getElementById("Question_Num-20").addEventListener("click", () => GetGameCurrentNum(20));
    document.getElementById("Question_Num-30").addEventListener("click", () => GetGameCurrentNum(30));
    document.getElementById("Question_Num-50").addEventListener("click", () => GetGameCurrentNum(50));
    document.getElementById("Question_Num-70").addEventListener("click", () => GetGameCurrentNum(70));
    document.getElementById("Question_Num-100").addEventListener("click", () => GetGameCurrentNum(100));

    document.getElementById("GameStartBtn").addEventListener("click", () => StartGame());
  });
}

// 새로 고침
window.addEventListener("load", () => {
  const orbit = document.getElementById("orbit");
  if (orbit) adjustOrbitSize(orbit);
});

window.addEventListener("resize", () => {
  const orbit = document.getElementById("orbit");
  if (orbit) adjustOrbitSize(orbit);
});

