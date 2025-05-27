import GameDataManager from "./GameDataManager.js";
import GameData from "./GameDataManager.js";
import { countries } from "./countries.js";

export function StartGame(){
  // 점수, 상태 초기화
  GameData.resetGameData();
  
  // 난이도 선택 화면 숨기기
  document.getElementById("level-container").style.display = "none";

  // 게임 화면 보이기
  document.getElementById("game-screen").style.display = "block"; 

  GameData.totalQuestions = GameData.CurrentNum;
  if(GameData.totalQuestions == 0) GameData.totalQuestions = 10;

  // 화면 초기화
  ResetLevelUI(GameData.ThisPlayingGameLevel)
  document.getElementById("correct-count").textContent = 0;
  document.getElementById("wrong-count").textContent = 0;

  // 카운트 블럭 초기화
  document.querySelectorAll('.count-block').forEach(block => {
    block.style.backgroundColor = '#90ee90'; // 초기 연두색
  });
  // 다음 문제 로딩
  loadNextFlag();
}

// 문제 로드
function loadNextFlag() {
  // 게임 종료
  if (GameData.usedCountryCodes.length >= GameData.totalQuestions) {
    GameOver();
    return;
  }

  // 중복된 국가가 나오면 다시 뽑기
  while (true) {
    GameData.randomIndex = Math.floor(Math.random() * 247);
    GameData.currentCode = countries[GameData.randomIndex].code;

    if (!GameData.usedCountryCodes.includes(GameData.currentCode)) {
      break;
    }
  }
  startCountdown(); // 호출해서 시작!
  // 중복이 아니면 저장
  GameData.usedCountryCodes.push(GameData.currentCode);

  // 선택된 국가 정보 저장
  GameData.currentIndex = GameData.randomIndex;

  const correctName = countries[GameData.randomIndex].name;

  // 난이도 쉬움
  if (GameData.ThisPlayingGameLevel === "쉬움"){
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
        GameData.EasyCorrectValue = options[index];
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
  else if(GameData.ThisPlayingGameLevel === "보통"){
    document.getElementById("ShowInitial").textContent = countries[GameData.randomIndex].initial;
    document.querySelector("#GameClass_Normal .AnswerInputStyle").value = "";
    document.querySelector("#GameClass_Normal .AnswerInputStyle").disabled = false;
    document.querySelector("#GameClass_Normal .submit-btn").disabled = false;
  }
  else if(GameData.ThisPlayingGameLevel === "어려움"){
    document.querySelector("#GameClass_Hard .AnswerInputStyle").value = "";
    document.querySelector("#GameClass_Hard .AnswerInputStyle").disabled = false;
    document.querySelector("#GameClass_Hard .submit-btn").disabled = false;
  }

  const flagUrl = `https://flagcdn.com/w320/${GameData.currentCode}.png`;
  document.getElementById("flag-image").src = flagUrl;
  document.getElementById("feedback").textContent = "";

  let _input = document.querySelector("#GameClass_Normal .AnswerInputStyle");
  if(GameData.ThisPlayingGameLevel === "어려움") {
    _input = document.querySelector("#GameClass_Hard .AnswerInputStyle");
  }
  // 확실한 포커싱 (엔터 연타 대비)
  setTimeout(() => {
    _input.focus();
  }, 50);
}

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
  ResetLevelUI(GameData.ThisPlayingGameLevel)
  document.getElementById("flag-image").src = `https://flagcdn.com/w320/kr.png`;
  document.getElementById("question").textContent = "🎉 모든 문제를 풀었습니다!";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("countdown-bar").style.display = "none";
  document.getElementById("end-buttons").style.display = "block";
}


// 레벨에 따른 UI 초기화
function ResetLevelUI(level){
  if(GameData.usedCountryCodes.length >= GameData.totalQuestions){
    document.getElementById("GameClass_Easy").style.display ="none";
    document.getElementById("GameClass_Normal").style.display ="none";
    document.getElementById("GameClass_Hard").style.display ="none";
  }
  else if(level === "쉬움"){
    document.getElementById("GameClass_Hard").style.display ="none";
    document.getElementById("GameClass_Easy").style.display ="block";
    document.getElementById("GameClass_Normal").style.display ="none";
  }
  else if(level === "보통"){
    document.getElementById("GameClass_Normal").style.display ="block";
    document.getElementById("GameClass_Easy").style.display ="none";
    document.getElementById("GameClass_Hard").style.display ="none";
    document.querySelector(".AnswerInputStyle").value = "";
  }
  else if(level === "어려움"){
    document.getElementById("GameClass_Hard").style.display ="block";
    document.getElementById("GameClass_Easy").style.display ="none";
    document.getElementById("GameClass_Normal").style.display ="none";
    document.querySelector(".AnswerInputStyle").value = "";
  }
  document.getElementById("feedback").textContent = "";
  document.getElementById("question").textContent = "이 국기는 어느 나라일까요?";

  document.getElementById("feedback").style.display = "block";
  document.getElementById("end-buttons").style.display = "none";
  document.getElementById("countdown-bar").style.display = "block";
  document.getElementById("wrong-questions").style.display = "none";
}


// 카운트다운
function startCountdown() {
  GameData.index = 0;
  clearInterval(GameData.countdownInterval);

  const blocks = document.querySelectorAll('.count-block');

  // 초기화
  blocks.forEach(block => {
    block.style.backgroundColor = '#90ee90';
  });

  GameData.countdownInterval = setInterval(() => {
    if (GameData.index < blocks.length) {
      blocks[GameData.index].style.backgroundColor = '#ffffff';
      GameData.index++;
    } else {
      clearInterval(GameData.countdownInterval);

      let isDisabled = false;
      // 5초 지나도 아직 제출 안 했으면 자동 오답 처리
      if(GameData.ThisPlayingGameLevel === "쉬움"){
        document.getElementById("EasyCorrectBtn1").classList.add("disabled-btn");
        document.getElementById("EasyCorrectBtn2").classList.add("disabled-btn");
        document.getElementById("EasyCorrectBtn3").classList.add("disabled-btn");
      }
      else if (GameData.ThisPlayingGameLevel === "보통") {
        isDisabled = document.querySelector("#GameClass_Normal .submit-btn").disabled;
      }
      else if(GameData.ThisPlayingGameLevel === "어려움"){
        isDisabled = document.querySelector("#GameClass_Hard .submit-btn").disabled;
      }
      if (!isDisabled) {
        checkAnswer(true); // 시간 초과 오답 처리
      }
    }
  }, 1000);
}

// 정답 체크 함수
export function checkAnswer(isTimeout = false, clickedButton = null) {
  clearInterval(GameData.countdownInterval); // 정답 제출하면 카운트 멈춤
  
  if(GameData.ThisPlayingGameLevel === "쉬움"){
    GameData.userAnswer = GameData.EasyCorrectValue;
  }
  else if(GameData.ThisPlayingGameLevel === "보통"){
    GameData.userInput = document.querySelector("#GameClass_Normal .AnswerInputStyle");
    GameData.userAnswer = GameData.userInput?.value.trim();
    document.querySelector("#GameClass_Normal .submit-btn").disabled = true;
    GameData.userInput.disabled = true;
  }
  else if(GameData.ThisPlayingGameLevel === "어려움"){
    GameData.userInput = document.querySelector("#GameClass_Hard .AnswerInputStyle");
    GameData.userAnswer = GameData.userInput?.value.trim();
    document.querySelector("#GameClass_Hard .submit-btn").disabled = true;
    GameData.userInput.disabled = true;
  }
  GameData.correctAnswer = countries[GameData.currentIndex].name;
  const feedback = document.getElementById("feedback");

  // 정답 여부 판단
  if (!isTimeout && GameData.userAnswer === GameData.correctAnswer) {
    if(GameData.ThisPlayingGameLevel === "쉬움") clickedButton.classList.add("correct-btn");
    feedback.textContent = "✅ 정답입니다!";
    feedback.style.color = "green";
    GameData.correctCount++;
  } 
  else {
    // ❌ 오답 저장
    if (!isTimeout) {
      GameData.wrongAnswers.push({
        flag: countries[GameData.currentIndex].code,
        answer: countries[GameData.currentIndex].name,
        user: GameData.userAnswer
      });
      if(GameData.ThisPlayingGameLevel === "쉬움") clickedButton.classList.add("wrong-btn");
    } else {
      GameData.wrongAnswers.push({
        flag: countries[GameData.currentIndex].code,
        answer: countries[GameData.currentIndex].name,
        user: "(미응답)"
      });
    }
    // 피드백
    feedback.textContent = isTimeout 
      ? `⏱️ 시간 초과! ${GameData.correctAnswer}` 
      : `❌ ${GameData.correctAnswer}`;
    feedback.style.color = "red";
    GameData.wrongCount++;
  }

  // 점수 업데이트
  document.getElementById("correct-count").textContent = GameData.correctCount;
  document.getElementById("wrong-count").textContent = GameData.wrongCount;

  // 다음 문제로 넘어가기
  setTimeout(loadNextFlag, 1500);
}

