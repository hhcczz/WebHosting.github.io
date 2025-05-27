// GameDataManager.js
const GameDataManager = {
  currentCode: null,
  currentIndex: 0,
  randomIndex: 0,
  usedCountryCodes: [],
  wrongAnswers: [],

  
  totalQuestions: 10,
  ThisPlayingGameLevel: "쉬움",
  CurrentNum: 0,

  correctCount: 0,
  wrongCount: 0,

  index: 0,
  countdownInterval: null,

  EasyCorrectValue: 'kr',
  userInput: "",
  userAnswer: "",

  // 초기화 함수
  resetGameData() {
    this.currentCode = null;
    this.currentIndex = 0;
    this.randomIndex = 0;
    this.usedCountryCodes = [];
    this.wrongAnswers = [];
    this.correctCount = 0;
    this.wrongCount = 0;
    this.index = 0;
    this.countdownInterval = null;
    this.userInput = "";
    this.userAnswer = "";
    this.EasyCorrectValue = 'kr';
  }
};

export default GameDataManager;
