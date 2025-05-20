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
  { code: "us", name: "미국", initial: "ㅁㄱ", continent: "북아메리카" },
  { code: "cn", name: "중국", initial: "ㅈㄱ", continent: "아시아" },
  { code: "jp", name: "일본", initial: "ㅇㅂ", continent: "아시아" },
  { code: "de", name: "독일", initial: "ㄷㅇ", continent: "유럽" },
  { code: "in", name: "인도", initial: "ㅇㄷ", continent: "아시아" },
  { code: "gb", name: "영국", initial: "ㅇㄱ", continent: "유럽" },
  { code: "fr", name: "프랑스", initial: "ㅍㄹㅅ", continent: "유럽" },
  { code: "it", name: "이탈리아", initial: "ㅇㅌㄹㅇ", continent: "유럽" },
  { code: "ca", name: "캐나다", initial: "ㅋㄴㄷ", continent: "북아메리카" },
  { code: "ru", name: "러시아", initial: "ㄹㅅㅇ", continent: "유럽" },
  { code: "br", name: "브라질", initial: "ㅂㄹㅈ", continent: "남아메리카" },
  { code: "kr", name: "대한민국", initial: "ㄷㅎㅁㄱ", continent: "아시아" },
  { code: "au", name: "호주", initial: "ㅎㅈ", continent: "오세아니아" },
  { code: "mx", name: "멕시코", initial: "ㅁㅅㅋ", continent: "북아메리카" },
  { code: "es", name: "스페인", initial: "ㅅㅍㅇ", continent: "유럽" },
  { code: "nl", name: "네덜란드", initial: "ㄴㄷㄹㄷ", continent: "유럽" },
  { code: "ch", name: "스위스", initial: "ㅅㅇㅅ", continent: "유럽" },
  { code: "sa", name: "사우디 아라비아", initial: "ㅅㅇㄷㅇㄹㅂㅇ", continent: "중동" },
  { code: "tr", name: "터키", initial: "ㅌㅋ", continent: "아시아" },
  { code: "id", name: "인도네시아", initial: "ㅇㄷㄴㅅㅇ", continent: "아시아" },
  { code: "pl", name: "폴란드", initial: "ㅍㄹㄷ", continent: "유럽" },
  { code: "be", name: "벨기에", initial: "ㅂㄱㅇ", continent: "유럽" },
  { code: "se", name: "스웨덴", initial: "ㅅㅇㄷ", continent: "유럽" },
  { code: "th", name: "태국", initial: "ㅌㄱ", continent: "아시아" },
  { code: "ng", name: "나이지리아", initial: "ㄴㅇㅈㄹㅇ", continent: "아프리카" },
  { code: "ph", name: "필리핀", initial: "ㅍㄹㅍ", continent: "아시아" },
  { code: "ie", name: "아일랜드", initial: "ㅇㅇㄹㄷ", continent: "유럽" },
  { code: "no", name: "노르웨이", initial: "ㄴㄹㅇㅇ", continent: "유럽" },
  { code: "sg", name: "싱가포르", initial: "ㅅㄱㅍㄹ", continent: "아시아" },
  { code: "dk", name: "덴마크", initial: "ㄷㅁㅋ", continent: "유럽" },
  { code: "my", name: "말레이시아", initial: "ㅁㄹㅇㅅㅇ", continent: "아시아" },
  { code: "eg", name: "이집트", initial: "ㅇㅈㅌ", continent: "아프리카" },
  { code: "vn", name: "베트남", initial: "ㅂㅌㄴ", continent: "아시아" },
  { code: "hk", name: "홍콩", initial: "ㅎㅋ", continent: "아시아" },
  { code: "cz", name: "체코", initial: "ㅊㅋ", continent: "유럽" },
  { code: "pt", name: "포르투갈", initial: "ㅍㄹㅌㄱ", continent: "유럽" },
  { code: "nz", name: "뉴질랜드", initial: "ㄴㅈㄹㄷ", continent: "오세아니아" },
  { code: "gr", name: "그리스", initial: "ㄱㄹㅅ", continent: "유럽" },
  { code: "fi", name: "핀란드", initial: "ㅍㄹㄷ", continent: "유럽" },
  { code: "ro", name: "루마니아", initial: "ㄹㅁㄴㅇ", continent: "유럽" },
  { code: "ua", name: "우크라이나", initial: "ㅇㅋㄹㅇㄴ", continent: "유럽" },
  { code: "cl", name: "칠레", initial: "ㅊㄹ", continent: "남아메리카" },
  { code: "bd", name: "방글라데시", initial: "ㅂㄱㄹㄷㅅ", continent: "아시아" },
  { code: "pk", name: "파키스탄", initial: "ㅍㅋㅅㅌ", continent: "아시아" },
  { code: "ar", name: "아르헨티나", initial: "ㅇㄹㅎㅌㄴ", continent: "남아메리카" },
  { code: "ke", name: "케냐", initial: "ㅋㄴ", continent: "아프리카" },
  { code: "co", name: "콜롬비아", initial: "ㅋㄹㅂㅇ", continent: "남아메리카" },
  { code: "ae", name: "아랍에미리트", initial: "ㅇㄹㅇㅁㄹㅌ", continent: "중동" },
  { code: "ma", name: "모로코", initial: "ㅁㄹㅋ", continent: "아프리카" },
  { code: "np", name: "네팔", initial: "ㄴㅍ", continent: "아시아" },
  { code: "ec", name: "에콰도르", initial: "ㅇㅋㄷㄹ", continent: "남아메리카" },
  { code: "pe", name: "페루", initial: "ㅍㄹ", continent: "남아메리카" },
  { code: "ve", name: "베네수엘라", initial: "ㅂㄴㅅㅇㄹ", continent: "남아메리카" },
  { code: "cu", name: "쿠바", initial: "ㅋㅂ", continent: "북아메리카" },
  { code: "py", name: "파라과이", initial: "ㅍㄹㄱㅇ", continent: "남아메리카" },
  { code: "uy", name: "우루과이", initial: "ㅇㄹㄱㅇ", continent: "남아메리카" },
  { code: "bo", name: "볼리비아", initial: "ㅂㄹㅂㅇ", continent: "남아메리카" },
  { code: "do", name: "도미니카 공화국", initial: "ㄷㅁㄴㅋㄱㅎㄱ", continent: "북아메리카" },
  { code: "hn", name: "온두라스", initial: "ㅇㄷㄹㅅ", continent: "북아메리카" },
  { code: "sv", name: "엘살바도르", initial: "ㅇㅅㅂㄷㄹ", continent: "북아메리카" },
  { code: "cr", name: "코스타리카", initial: "ㅋㅅㅌㄹㅋ", continent: "북아메리카" },
  { code: "ni", name: "니카라과", initial: "ㄴㅋㄹㄱ", continent: "북아메리카" },
  { code: "gt", name: "과테말라", initial: "ㄱㅌㅁㄹ", continent: "북아메리카" },
  { code: "jm", name: "자메이카", initial: "ㅈㅁㅇㅋ", continent: "북아메리카" },
  { code: "bs", name: "바하마", initial: "ㅂㅎㅁ", continent: "북아메리카" },
  { code: "tt", name: "트리니다드 토바고", initial: "ㅌㄹㄴㄷㄷ ㅌㅂㄱ", continent: "북아메리카" },
  { code: "bb", name: "바베이도스", initial: "ㅂㅂㅇㄷㅅ", continent: "북아메리카" },
  { code: "bm", name: "버뮤다", initial: "ㅂㅁㄷ", continent: "북아메리카" },
  { code: "tc", name: "터크스와 케이커스", initial: "ㅌㅋㅅㅇ ㅋㅇㅋㅅ", continent: "북아메리카" },
  { code: "ky", name: "케이맨 제도", initial: "ㅋㅇㅁ ㅈㄷ", continent: "북아메리카" },
  { code: "af", name: "아프가니스탄", initial: "ㅇㅍㄱㄴㅅㅌ", continent: "아시아" },
  { code: "al", name: "알바니아", initial: "ㅇㅂㄴㅇ", continent: "유럽" },
  { code: "dz", name: "알제리", initial: "ㅇㅈㄹ", continent: "아프리카" },
  { code: "as", name: "아메리칸사모아", initial: "ㅇㅁㄹㅋㅅㅁㅇ", continent: "오세아니아" },
  { code: "ad", name: "안도라", initial: "ㅇㄷㄹ", continent: "유럽" },
  { code: "ao", name: "앙골라", initial: "ㅇㄱㄹ", continent: "아프리카" },
  { code: "ai", name: "앙길라", initial: "ㅇㄱㄹ", continent: "북아메리카" },
  { code: "ag", name: "앤티가 바부다", initial: "ㅇㅌㄱ ㅂㅂㄷ", continent: "북아메리카" },
  { code: "am", name: "아르메니아", initial: "ㅇㄹㅁㄴㅇ", continent: "아시아" },
  { code: "aw", name: "아루바", initial: "ㅇㄹㅂ", continent: "오세아니아" },
  { code: "at", name: "오스트리아", initial: "ㅇㅅㅌㄹㅇ", continent: "유럽" },
  { code: "az", name: "아제르바이잔", initial: "ㅇㅈㄹㅂㅇㅈ", continent: "중동" },
  { code: "bh", name: "바레인", initial: "ㅂㄹㅇ", continent: "중동" },
  { code: "by", name: "벨라루스", initial: "ㅂㄹㄹㅅ", continent: "유럽" },
  { code: "bz", name: "벨리즈", initial: "ㅂㄹㅈ", continent: "북아메리카" },
  { code: "bj", name: "베냉", initial: "ㅂㄴ", continent: "아프리카" },
  { code: "bt", name: "부탄", initial: "ㅂㅌ", continent: "아시아" },
  { code: "ba", name: "보스니아 헤르체고비나", initial: "ㅂㅅㄴㅇ ㅎㄹㅊㄱㅂㄴ", continent: "유럽" },
  { code: "bw", name: "보츠와나", initial: "ㅂㅊㅇㄴ", continent: "아프리카" },
  { code: "bn", name: "브루나이", initial: "ㅂㄹㄴㅇ", continent: "아시아" },
  { code: "bg", name: "불가리아", initial: "ㅂㄱㄹㅇ", continent: "유럽" },
  { code: "bf", name: "부르키나파소", initial: "ㅂㄹㅋㄴㅍㅅ", continent: "아프리카" },
  { code: "bi", name: "부룬디", initial: "ㅂㄹㄷ", continent: "아프리카" },
  { code: "kh", name: "캄보디아", initial: "ㅋㅂㄷㅇ", continent: "아시아" },
  { code: "cm", name: "카메룬", initial: "ㅋㅁㄹ", continent: "아프리카" },
  { code: "cv", name: "카보베르데", initial: "ㅋㅂㅂㄹㄷ", continent: "아프리카" },
  { code: "cf", name: "중앙아프리카 공화국", initial: "ㅈㅇㅇㅍㄹㅋ ㄱㅎㄱ", continent: "아프리카" },
  { code: "td", name: "차드", initial: "ㅊㄷ", continent: "아프리카" },
  { code: "km", name: "코모로", initial: "ㅋㅁㄹ", continent: "아프리카" },
  { code: "cg", name: "콩고", initial: "ㅋㄱ", continent: "아프리카" },
  { code: "cd", name: "콩고 민주 공화국", initial: "ㅋㄱ ㅁㅈ ㄱㅎㄱ", continent: "아프리카" },
  { code: "hr", name: "크로아티아", initial: "ㅋㄹㅇㅌㅇ", continent: "유럽" },
  { code: "cy", name: "키프로스", initial: "ㅋㅍㄹㅅ", continent: "유럽" },
  { code: "dj", name: "지부티", initial: "ㅈㅂㅌ", continent: "아프리카" },
  { code: "dm", name: "도미니카 연방", initial: "ㄷㅁㄴㅋ ㅇㅂ", continent: "북아메리카" },
  { code: "gq", name: "적도 기니", initial: "ㅈㄷ ㄱㄴ", continent: "아프리카" },
  { code: "er", name: "에리트레아", initial: "ㅇㄹㅌㄹㅇ", continent: "아프리카" },
  { code: "ee", name: "에스토니아", initial: "ㅇㅅㅌㄴㅇ", continent: "유럽" },
  { code: "et", name: "에티오피아", initial: "ㅇㅌㅇㅍㅇ", continent: "아프리카" },
  { code: "fj", name: "피지", initial: "ㅍㅈ", continent: "오세아니아" },
  { code: "ga", name: "가봉", initial: "ㄱㅂ", continent: "아프리카" },
  { code: "gm", name: "감비아", initial: "ㄱㅂㅇ", continent: "아프리카" },
  { code: "ge", name: "조지아", initial: "ㅈㅈㅇ", continent: "아시아" },
  { code: "gh", name: "가나", initial: "ㄱㄴ", continent: "아프리카" },
  { code: "gn", name: "기니", initial: "ㄱㄴ", continent: "아프리카" },
  { code: "gw", name: "기니비사우", initial: "ㄱㄴㅂㅅㅇ", continent: "아프리카" },
  { code: "gy", name: "가이아나", initial: "ㄱㅇㅇㄴ", continent: "남아메리카" },
  { code: "ht", name: "아이티", initial: "ㅇㅇㅌ", continent: "북아메리카" },
  { code: "hu", name: "헝가리", initial: "ㅎㄱㄹ", continent: "유럽" },
  { code: "is", name: "아이슬란드", initial: "ㅇㅇㅅㄹㄷ", continent: "유럽" },
  { code: "ir", name: "이란", initial: "ㅇㄹ", continent: "중동" },
  { code: "iq", name: "이라크", initial: "ㅇㄹㅋ", continent: "중동" },
  { code: "ax", name: "올란드 제도", initial: "ㅇㄹㄷ ㅈㄷ", continent: "유럽" },
  { code: "aq", name: "남극", initial: "ㄴㄱ", continent: "남극 대륙" },
  { code: "bv", name: "부베섬", initial: "ㅂㅂㅅ", continent: "남극 대륙" },
  { code: "cc", name: "코코스킬링 제도", initial: "ㅋㅋㅅㅋㄹ ㅈㄷ", continent: "오세아니아" },
  { code: "ck", name: "쿡 제도", initial: "ㅋ ㅈㄷ", continent: "오세아니아" },
  { code: "cx", name: "크리스마스섬", initial: "ㅋㄹㅅㅁㅅㅅ", continent: "오세아니아" },
  { code: "eh", name: "서사하라", initial: "ㅅㅅㅎㄹ", continent: "아프리카" },
  { code: "fk", name: "포클랜드 제도말비나스", initial: "ㅍㅋㄹㄷ ㅈㄷㅁㅂㄴㅅ", continent: "남아메리카" },
  { code: "fo", name: "페로 제도", initial: "ㅍㄹ ㅈㄷ", continent: "유럽" },
  { code: "gf", name: "프랑스령 기아나", initial: "ㅍㄹㅅㄹㄱㅇㄴ", continent: "남아메리카" },
  { code: "gg", name: "건지", initial: "ㄱㅈ", continent: "유럽" },
  { code: "gi", name: "지브롤터", initial: "ㅈㅂㄹㅌ", continent: "유럽" },
  { code: "gl", name: "그린란드", initial: "ㄱㄹㄹㄷ", continent: "북아메리카" },
  { code: "gp", name: "과들루프", initial: "ㄱㄷㄹㅍ", continent: "북아메리카" },
  { code: "gs", name: "사우스조지아 사우스샌드위치 제도", initial: "ㅅㅇㅅㅈㅈㅇ ㅅㅇㅅㅅㄷㅇㅊ ㅈㄷ", continent: "남극 대륙" },
  { code: "gu", name: "괌", initial: "ㄱ", continent: "오세아니아" },
  { code: "hm", name: "허드 맥도널드 제도", initial: "ㅎㄷ ㅁㄷㄴㄷ ㅈㄷ", continent: "남극 대륙" },
  { code: "im", name: "맨섬", initial: "ㅁㅅ", continent: "유럽" },
  { code: "io", name: "영국령 인도양 지역", initial: "ㅇㄱㄹ ㅇㅇㅇ ㅈㅇ", continent: "아시아" },
  { code: "je", name: "저지", initial: "ㅈㅈ", continent: "유럽" },
  { code: "ki", name: "키리바시", initial: "ㅋㄹㅂㅅ", continent: "오세아니아" },
  { code: "kn", name: "세인트키츠 네비스", initial: "ㅅㅇㅌㅋㅊ ㄴㅂㅅ", continent: "북아메리카" },
  { code: "lc", name: "세인트루시아", initial: "ㅅㅇㅌㄹㅅㅇ", continent: "북아메리카" },
  { code: "mf", name: "생마르탱 프랑스령", initial: "ㅅㅁㄹㅌ ㅍㄹㅅㄹ", continent: "북아메리카" },
  { code: "mh", name: "마셜 제도", initial: "ㅁㅅ ㅈㄷ", continent: "오세아니아" },
  { code: "mp", name: "북마리아나 제도", initial: "ㅂㅁㄹㅇㄴㅈㄷ", continent: "오세아니아" },
  { code: "mq", name: "마르티니크", initial: "ㅁㄹㅌㄴㅋ", continent: "북아메리카" },
  { code: "ms", name: "몬트세랫", initial: "ㅁㅌㅅㄹ", continent: "북아메리카" },
  { code: "nc", name: "뉴칼레도니아", initial: "ㄴㅋㄹㄷㄴㅇ", continent: "오세아니아" },
  { code: "nf", name: "노퍽섬", initial: "ㄴㅍㅅ", continent: "오세아니아" },
  { code: "nu", name: "니우에", initial: "ㄴㅇㅇ", continent: "오세아니아" },
  { code: "om", name: "오만", initial: "ㅇㅁ", continent: "중동" },
  { code: "pa", name: "파나마", initial: "ㅍㄴㅁ", continent: "북아메리카" },
  { code: "pf", name: "프랑스령 폴리네시아", initial: "ㅍㄹㅅㄹ ㅍㄹㄴㅅㅇ", continent: "오세아니아" },
  { code: "pg", name: "파푸아뉴기니", initial: "ㅍㅍㅇㄴㄱㄴ", continent: "오세아니아" },
  { code: "pm", name: "생피에르 미클롱", initial: "ㅅㅍㅇㄹ ㅁㅋㄹ", continent: "북아메리카" },
  { code: "pn", name: "핏케언 제도", initial: "ㅍㅋㅇ ㅈㄷ", continent: "오세아니아" },
  { code: "pr", name: "푸에르토리코", initial: "ㅍㅇㄹㅌㄹㅋ", continent: "북아메리카" },
  { code: "ps", name: "팔레스타인", initial: "ㅍㄹㅅㅌㅇ", continent: "중동" },
  { code: "pw", name: "팔라우", initial: "ㅍㄹㅇ", continent: "오세아니아" },
  { code: "qa", name: "카타르", initial: "ㅋㅌㄹ", continent: "중동" },
  { code: "re", name: "레위니옹", initial: "ㄹㅇㄴㅇ", continent: "아프리카" },
  { code: "rw", name: "르완다", initial: "ㄹㅇㄷ", continent: "아프리카" },
  { code: "sb", name: "솔로몬 제도", initial: "ㅅㄹㅁ ㅈㄷ", continent: "오세아니아" },
  { code: "sc", name: "세이셸", initial: "ㅅㅇㅅ", continent: "아프리카" },
  { code: "sd", name: "수단", initial: "ㅅㄷ", continent: "아프리카" },
  { code: "sh", name: "세인트헬레나", initial: "ㅅㅇㅌㅎㄹㄴ", continent: "아프리카" },
  { code: "sj", name: "스발바르 얀마옌", initial: "ㅅㅂㅂㄹ ㅇㅁㅇ", continent: "유럽" },
  { code: "sk", name: "슬로바키아", initial: "ㅅㄹㅂㅋㅇ", continent: "유럽" },
  { code: "sl", name: "시에라리온", initial: "ㅅㅇㄹㄹㅇ", continent: "아프리카" },
  { code: "sm", name: "산마리노", initial: "ㅅㅁㄹㄴ", continent: "유럽" },
  { code: "sn", name: "세네갈", initial: "ㅅㄴㄱ", continent: "아프리카" },
  { code: "so", name: "소말리아", initial: "ㅅㅁㄹㅇ", continent: "아프리카" },
  { code: "sr", name: "수리남", initial: "ㅅㄹㄴ", continent: "남아메리카" },
  { code: "ss", name: "남수단", initial: "ㄴㅅㄷ", continent: "아프리카" },
  { code: "st", name: "상투메 프린시페", initial: "ㅅㅌㅁ ㅍㄹㅅㅍ", continent: "아프리카" },
  { code: "sx", name: "신트마르턴 네덜란드령", initial: "ㅅㅌㅁㄹㅌ ㄴㄷㄹㄷㄹ", continent: "북아메리카" },
  { code: "sy", name: "시리아", initial: "ㅅㄹㅇ", continent: "중동" },
  { code: "sz", name: "에스와티니", initial: "ㅇㅅㅇㅌㄴ", continent: "아프리카" },
  { code: "tf", name: "프랑스령 남부와 남극 지역", initial: "ㅍㄹㅅㄹ ㄴㅂㅇ ㄴㄱ ㅈㅇ", continent: "남극 대륙" },
  { code: "tg", name: "토고", initial: "ㅌㄱ", continent: "아프리카" },
  { code: "tj", name: "타지키스탄", initial: "ㅌㅈㅋㅅㅌ", continent: "아시아" },
  { code: "tk", name: "토켈라우", initial: "ㅌㅋㄹㅇ", continent: "오세아니아" },
  { code: "tl", name: "동티모르", initial: "ㄷㅌㅁㄹ", continent: "아시아" },
  { code: "tm", name: "투르크메니스탄", initial: "ㅌㄹㅋㅁㄴㅅㅌ", continent: "아시아" },
  { code: "tn", name: "튀니지", initial: "ㅌㄴㅈ", continent: "아프리카" },
  { code: "to", name: "통가", initial: "ㅌㄱ", continent: "오세아니아" },
  { code: "tv", name: "투발루", initial: "ㅌㅂㄹ", continent: "오세아니아" },
  { code: "tz", name: "탄자니아", initial: "ㅌㅈㄴㅇ", continent: "아프리카" },
  { code: "ug", name: "우간다", initial: "ㅇㄱㄷ", continent: "아프리카" },
  { code: "um", name: "미국령 군소 제도", initial: "ㅁㄱㄹ ㄱㅅ ㅈㄷ", continent: "오세아니아" },
  { code: "uz", name: "우즈베키스탄", initial: "ㅇㅈㅂㅋㅅㅌ", continent: "아시아" },
  { code: "va", name: "바티칸 시국", initial: "ㅂㅌㅋ ㅅㄱ", continent: "유럽" },
  { code: "vc", name: "세인트빈센트 그레나딘", initial: "ㅅㅇㅌㅂㅅㅌ ㄱㄹㄴㄷ", continent: "북아메리카" },
  { code: "vg", name: "영국령 버진아일랜드", initial: "ㅇㄱㄹ ㅂㅈㅇㅇㄹㄷ", continent: "북아메리카" },
  { code: "vi", name: "미국령 버진아일랜드", initial: "ㅁㄱㄹ ㅂㅈㅇㅇㄹㄷ", continent: "북아메리카" },
  { code: "vu", name: "바누아투", initial: "ㅂㄴㅇㅌ", continent: "오세아니아" },
  { code: "wf", name: "월리스 푸투나", initial: "ㅇㄹㅅ ㅍㅌㄴ", continent: "오세아니아" },
  { code: "ws", name: "사모아", initial: "ㅅㅁㅇ", continent: "오세아니아" },
  { code: "ye", name: "예멘", initial: "ㅇㅁ", continent: "중동" },
  { code: "yt", name: "마요트", initial: "ㅁㅇㅌ", continent: "아프리카" },
  { code: "zm", name: "잠비아", initial: "ㅈㅂㅇ", continent: "아프리카" },
  { code: "zw", name: "짐바브웨", initial: "ㅈㅂㅂㅇ", continent: "아프리카" },
  { code: "bl", name: "생바르텔레미", initial: "ㅅㅂㄹㅌㄹㅁ", continent: "북아메리카" },
  { code: "bq", name: "보네르섬", initial: "ㅂㄴㄹㅅ", continent: "북아메리카" },
  { code: "cw", name: "퀴라소", initial: "ㅋㄹㅅ", continent: "북아메리카" }
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
  // 게임 종료
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

  // 난이도 쉬움
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
  else if(ThisPlayingGameLevel === "보통"){
    document.getElementById("ShowInitial").textContent = countries[randomIndex].initial;
    document.getElementById("N_answer-input").value = "";
    document.getElementById("N_answer-input").disabled = false;
    document.getElementById("N_submit-btn").disabled = false;
  }
  else if(ThisPlayingGameLevel === "어려움"){
    document.getElementById("H_answer-input").value = "";
    document.getElementById("H_answer-input").disabled = false;
    document.getElementById("H_submit-btn").disabled = false;
  }

  const flagUrl = `https://flagcdn.com/w320/${currentCode}.png`;
  document.getElementById("flag-image").src = flagUrl;
  document.getElementById("feedback").textContent = "";

  // 확실한 포커싱 (엔터 연타 대비)
  setTimeout(() => {
    if(ThisPlayingGameLevel === "보통") document.getElementById("N_answer-input").focus();
    else if(ThisPlayingGameLevel === "어려움") document.getElementById("H_answer-input").focus();
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
  else if(ThisPlayingGameLevel === "보통"){
    userInput = document.getElementById("N_answer-input");
    userAnswer = userInput.value.trim();
    document.getElementById("N_submit-btn").disabled = true;
    userInput.disabled = true;
  }
  else if(ThisPlayingGameLevel === "어려움") {
    userInput = document.getElementById("H_answer-input");
    userAnswer = userInput.value.trim();
    document.getElementById("H_submit-btn").disabled = true;
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
      ? `⏱️ 시간 초과! ${correctAnswer}` 
      : `❌ ${correctAnswer}`;
    feedback.style.color = "red";
    wrongCount++;
  }

  // 점수 업데이트
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("wrong-count").textContent = wrongCount;

  // 다음 문제로 넘어가기
  setTimeout(loadNextFlag, 1500);
}

const N_submitBtn = document.getElementById("N_submit-btn");
const H_submitBtn = document.getElementById("H_submit-btn");
const N_inputBox = document.getElementById("N_answer-input");
const H_inputBox = document.getElementById("H_answer-input");

// ✅ Enter 키로 제출
N_inputBox.addEventListener("keydown", (e) => {
  const isButtonEnabled = !N_submitBtn.disabled;
  if (e.key === "Enter" && isButtonEnabled) {
    checkAnswer();
  }
});

// ✅ Enter 키로 제출
H_inputBox.addEventListener("keydown", (e) => {
  const isButtonEnabled = !H_submitBtn.disabled;
  if (e.key === "Enter" && isButtonEnabled) {
    checkAnswer();
  }
});

// ✅ 마우스 클릭 or 스마트폰 터치
N_submitBtn.addEventListener("click", () => {
  if (!N_submitBtn.disabled) {
    checkAnswer();
  }
});

// ✅ 마우스 클릭 or 스마트폰 터치
H_submitBtn.addEventListener("click", () => {
  if (!H_submitBtn.disabled) {
    checkAnswer();
  }
});

// 레벨에 따른 UI 초기화
function ResetLevelUI(level){
  if(usedCountryCodes.length >= totalQuestions){
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
    document.getElementById("N_answer-input").value = "";
  }
  else if(level === "어려움"){
    document.getElementById("GameClass_Hard").style.display ="block";
    document.getElementById("GameClass_Easy").style.display ="none";
    document.getElementById("GameClass_Normal").style.display ="none";
    document.getElementById("H_answer-input").value = "";
  }
  document.getElementById("feedback").textContent = "";
  document.getElementById("question").textContent = "이 국기는 어느 나라일까요?";

  document.getElementById("feedback").style.display = "block";
  document.getElementById("end-buttons").style.display = "none";
  document.getElementById("countdown-bar").style.display = "block";
  document.getElementById("wrong-questions").style.display = "none";
}
// 게임 다시하기
function StartGame(){
  // 점수, 상태 초기화
  correctCount = 0;
  wrongCount = 0;
  answeredQuestions = 0;
  currentCode = null;
  usedCountryCodes = [];
  wrongAnswers.length = 0;
  
  // 난이도 선택 화면 숨기기
  document.querySelector(".level-container").style.display = "none";

  // 게임 화면 보이기
  document.getElementById("game-screen").style.display = "block"; 

  totalQuestions = CurrentNum;
  if(totalQuestions == 0) totalQuestions = 10;

  // 화면 초기화
  ResetLevelUI(ThisPlayingGameLevel)
  document.getElementById("correct-count").textContent = 0;
  document.getElementById("wrong-count").textContent = 0;

  // 카운트 블럭 초기화
  document.querySelectorAll('.count-block').forEach(block => {
    block.style.backgroundColor = '#90ee90'; // 초기 연두색
  });
  // 다음 문제 로딩
  loadNextFlag();
}

// 다시하기 버튼
document.getElementById("retry-btn").addEventListener("click", () => {
  StartGame();
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
        isDisabled = document.getElementById("H_submit-btn").disabled;
      }
      else if(ThisPlayingGameLevel === "보통"){
        isDisabled = document.getElementById("N_submit-btn").disabled;
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

// 레벨 선택 화면 넘어갈때
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
  
  document.getElementById("GameStartBtn").addEventListener("click", () => StartGame());
});

// 홈 버튼
document.getElementById("home-btn").addEventListener("click", () => {
  window.location.reload();
});

// ✅ 오답 노트 보기
document.getElementById("incorrect-btn").addEventListener("click", showWrongAnswers);
window.addEventListener("load", adjustOrbitSize);
window.addEventListener("resize", adjustOrbitSize); // 반응형 유지
